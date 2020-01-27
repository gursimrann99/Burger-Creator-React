import * as actionTypes from './actions';
import axios from '../../orders';

export const purchaseBurgerSuccess = (id, orderData, histry) => {
    histry.push('/');
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const initialState = () => {
    return {
        type: actionTypes.BURGER_CREATION
    }
}

export const purchaseBurger = (orderData, history) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(res => {
                dispatch(initialState());
                dispatch(purchaseBurgerSuccess(res.data.name, orderData, history))
            })
            .catch(err => {
                dispatch(purchaseBurgerFail());
            });
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersError = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}


export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        setTimeout(()=> {
            axios.get('/orders.json')
            .then(res => {
                const orders = [];
                for (let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(orders));
            })
            .catch(err => {
                dispatch(fetchOrdersError(err))
            });        },3000)

    }
}