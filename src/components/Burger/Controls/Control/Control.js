import React from 'react';

import classes from './Control.module.css';
const control = (props) => (
    <div className={classes.Control}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled = {props.disabledInfo}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default control;