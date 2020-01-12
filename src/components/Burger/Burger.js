import React from 'react';

import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map(($, i) => {
            return <Ingredients key={ingredient + i} type={ingredient} />
        });
    }).reduce((arr, obj) => {
        return arr.concat(obj);
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredients type="bread-top" />
            {transformedIngredients}

            <Ingredients type="bread-bottom" />

        </div>
    );
}

export default burger;