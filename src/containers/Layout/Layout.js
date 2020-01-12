import React, { Component } from 'react';

import Aux from '../../hoc/hoc';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
                <Toolbar toggleHandler={this.toggleHandler} />
                <SideDrawer open={this.state.drawerClosed} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}



export default Layout;