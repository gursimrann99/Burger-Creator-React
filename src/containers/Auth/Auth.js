import React, { Component } from "react";
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css'
import { auth } from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: ''
            },
        },
        isSignUp: false
    }

    loginHandler = (event) => {
        event.preventDefault();
        this.props.auth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    changeHandler = (event, inputIdentifier) => {
        const updatedControl = {
            ...this.state.controls,
            [inputIdentifier]: {
                ...this.state.controls[inputIdentifier],
                value: event.target.value
            }
        }
        this.setState({ controls: updatedControl });
    }
    switchHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        })
    }
    render() {
        const formElement = [];
        for (let key in this.state.controls) {
            formElement.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form = (
            <form >
                <fieldset style={{ "border": "none" }} disabled={this.props.loading}>
                    {formElement.map(e => {
                        return <Input
                            key={e.id}
                            elementtype={e.config.elementType}
                            elementconfig={e.config.elementConfig}
                            value={e.config.value}
                            changed={(event) => this.changeHandler(event, e.id)}
                        />

                    })}
                    <Button disabled={this.props.loading} clicked={this.loginHandler} btnType="Success" >SUBMIT</Button>
                    <Button disabled={this.props.loading} clicked={this.switchHandler} btnType="Danger">SWITCH TO {this.state.isSignUp ? 'SIGN IN' : 'SIGN UP'} </Button>
                </fieldset>
            </form>
        );
        let errorMsg = null;
        if (this.props.error) {
            errorMsg = (
                <p>{this.props.error.message}</p>
            )
        }
        let authRedirect;
        // if (this.props.isAuthenticated && this.props.purchasing) {
        //     authRedirect = <Redirect to='/checkout' />
        // }
        authRedirect = this.props.isAuthenticated ?
            this.props.isAuthenticated && this.props.purchasing ? <Redirect to='/checkout' /> : <Redirect to='/' /> :
            null;
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMsg}
                {this.props.loading ? <Spinner /> : null}
                <label>{this.state.isSignUp ? 'SIGN UP' : 'SIGN IN'} USER</label>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        purchasing: state.burgerCreation.purchasing
    }
}
export default connect(mapStateToProps, { auth })(Auth);