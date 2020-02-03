import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/hoc';

const sideDrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Closed];
    if (props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')} >
                <Logo />
                <nav>
                    <NavigationItems isAuth={props.isAuth} sideClicked={props.sideClicked} />
                </nav>
            </div>
        </Aux>

    )
}

export default sideDrawer;