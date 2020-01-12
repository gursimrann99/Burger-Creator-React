import React from 'react';

import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li>
            <a
                href={props.link}
                className={classes.active}>Burger Creation</a>
        </li>
        <li>
            <a
                href={props.link}>Checkout</a>
        </li>
    </ul>
);

export default navigationItems;
