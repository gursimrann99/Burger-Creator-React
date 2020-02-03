import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems} onClick={props.sideClicked}>
        <li>
            <NavLink
                to='/'
                exact
                activeClassName={classes.active}
            >Burger Creation</NavLink>
        </li>
        {props.isAuth ?<li>
            <NavLink
                to='/orders'
                activeClassName={classes.active}
            >Orders</NavLink>
        </li>: null}
        <li>
            {!props.isAuth ? <NavLink
                to='/auth'
                activeClassName={classes.active}
            >Authentication</NavLink> :
                <NavLink
                    to='/logout'
                    activeClassName={classes.active}
                >Logout</NavLink>}
        </li>
    </ul>
);

export default navigationItems;
