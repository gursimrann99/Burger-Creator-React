import React, { Component } from "react";
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import {axiosInstance} from '../../../orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/errorHandler/errorHandler';
import { purchaseBurger } from '../../../store/actions';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            houseNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'House Number'
                },
                value: ''
            },
            pinCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Pin Code'
                },
                value: ''
            },
            // country: '',
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'cheapest'
            }
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }
        this.props.purchaseBurger(order, this.props.history);
    }
    changedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedFormElement;

        this.setState({ orderForm: updatedForm });

    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {/* <fieldset disabled={true}> */}
                {formElementArray.map(ele => {
                    return <Input
                        key={ele.id}
                        elementtype={ele.config.elementType}
                        elementconfig={ele.config.elementConfig}
                        value={ele.config.value}
                        changed={(event) => this.changedHandler(event, ele.id)}
                    />
                })}
                <Button btnType="Success" >ORDER</Button>
                {/* </fieldset> */}
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerCreation.ingredients,
        price: state.burgerCreation.price,
        loading: state.order.loading,
        userId: state.auth.userID
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
//     }
// }
export default connect(mapStateToProps, { purchaseBurger })(withErrorHandler(ContactData, axiosInstance));