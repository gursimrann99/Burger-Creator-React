import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.ingredients[ingredient]
        });
    }
    const ingredient = ingredients.map(i => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={i.name} >
            {i.name}({i.amount})
            </span>
    })
    return (
        <div className={classes.Order} >
            <p>Ingredients: {ingredient} </p>
            <p>Price: Rs{props.price}</p>
        </div >
    );
};

export default order;