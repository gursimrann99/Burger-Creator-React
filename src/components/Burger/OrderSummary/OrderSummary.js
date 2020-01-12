import React, { Component } from 'react';
import Aux from '../../../hoc/hoc';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ing => {
            return <li key={ing}>
                <span style={{ textTransform: 'capitalize' }}>{ing}</span>: {this.props.ingredients[ing]}
            </li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Checkout your order</p>
                <Button clicked={this.props.purchaseCancel} btnType='Danger' >CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;