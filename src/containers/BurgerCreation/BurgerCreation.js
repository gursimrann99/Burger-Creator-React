import React, { Component } from 'react';

import Aux from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 10,
    meat: 30,
    bacon: 20
}
class BurgerCreation extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 40,
        purchasable: false,
        purchasing: false
    }
    updatePurchase(ingredients) {
        let sum;
        sum = Object.keys(ingredients).map(ingredient => {
            return ingredients[ingredient];
        }).reduce((sum, ele) => {
            return sum + ele
        }, 0)
        this.setState({ purchasable: sum > 0 })
    }
    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.price + priceAddition;
        this.setState({ price: newPrice, ingredients: newIngredients });
        this.updatePurchase(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] - 1;
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type] = newCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const newPrice = this.state.price - priceSubtraction;
        this.setState({ price: newPrice, ingredients: newIngredients });
        this.updatePurchase(newIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});

    }
    purchaseContinueHandler = () => {
        // alert("continue now");
      //  this.setState({purchasing: false});

    }
    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed= {this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseContinue ={this.purchaseContinueHandler}
                    purchaseCancel ={this.purchaseCancelHandler} 
                    price = {this.state.price}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <Controls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.price}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler} />
                </div>
            </Aux>
        )
    }
}

export default BurgerCreation;
