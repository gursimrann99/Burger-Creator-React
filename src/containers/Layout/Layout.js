import React, { Component } from 'react';
import Aux from '../../hoc/hoc';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        drawerClosed: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ drawerClosed: false });
    }
    toggleHandler = () => {
        this.setState((prevState) => {
            return { drawerClosed: !prevState.drawerClosed }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthenticated} toggleHandler={this.toggleHandler} />
                <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.drawerClosed} closed={this.sideDrawerClosedHandler} sideClicked={this.toggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);