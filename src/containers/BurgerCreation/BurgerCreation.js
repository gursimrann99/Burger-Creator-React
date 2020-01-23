import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/errorHandler/errorHandler';
import * as actionTypes from '../../store/actions';


class BurgerCreation extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    updatePurchase(ingredients) {
        let sum;
        sum = Object.keys(ingredients).map(ingredient => {
            return ingredients[ingredient];
        }).reduce((sum, ele) => {
            return sum + ele
        }, 0)
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const newCount = this.props.ings[type] + 1;
    //     const newIngredients = { ...this.props.ings };
    //     newIngredients[type] = newCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const newPrice = this.state.price + priceAddition;
    //     this.setState({ price: newPrice, ingredients: newIngredients });
    //     this.updatePurchase(newIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const newCount = this.props.ings[type] - 1;
    //     const newIngredients = { ...this.props.ings };
    //     newIngredients[type] = newCount;
    //     const priceSubtraction = INGREDIENT_PRICES[type];
    //     const newPrice = this.state.price - priceSubtraction;
    //     this.setState({ price: newPrice, ingredients: newIngredients });
    //     this.updatePurchase(newIngredients);
    // }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        // const queryParams = [];
        // for (let i in this.props.ings) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
        // }
        // queryParams.push('price=' + this.props.price);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
            price={this.props.price} />

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <div>
                    <Burger ingredients={this.props.ings} />
                </div>
                <div>
                    <Controls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchase(this.props.ings)}
                        ordered={this.purchaseHandler} />
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.price
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredient) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredient }),
        onIngredientRemove: (ingredient) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredient })

    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerCreation, axios));

