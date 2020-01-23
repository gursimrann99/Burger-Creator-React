import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li>
            <NavLink
                to='/'
                exact
                activeClassName={classes.active}
            >Burger Creation</NavLink>
        </li>
        <li>
            <NavLink
                to='/orders'
                
                activeClassName={classes.active}
            >Checkout</NavLink>
        </li>
    </ul>
);

export default navigationItems;
