import React, { Component } from "react";
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import { axiosInstance } from '../../orders';
import ErrorHandler from '../../hoc/errorHandler/errorHandler';
import { fetchOrders } from '..//../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            });
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
export default connect(mapStateToProps, { fetchOrders })(ErrorHandler(Orders, axiosInstance));