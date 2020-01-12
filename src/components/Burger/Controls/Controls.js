import React from 'react';

import classes from './Controls.module.css';
import Control from './Control/Control';

const ingredients = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
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
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default controls;