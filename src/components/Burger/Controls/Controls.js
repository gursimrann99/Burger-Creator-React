import React from 'react';

import classes from './Controls.module.css';
import Control from './Control/Control';

const ingredients = [
    { label: 'Salad', type: 'salad' },
    { label: 'Egg', type: 'egg' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const controls = (props) => (
    <div className={classes.Controls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {ingredients.map(ing => {
            return <Control key={ing.label}
                label={ing.label}
                added={() => props.ingredientAdded(ing.type)}
                removed={() => props.ingredientRemoved(ing.type)}
                disabledInfo={props.disabled[ing.type]} />
        })}
        {props.purchasable  ? 
        <button
            className={classes.OrderButton}
            onClick={props.ordered}>{props.isAuth?'ORDER NOW':'SIGN IN TO ORDER'}</button> :
            null}
    </div>
)

export default controls;