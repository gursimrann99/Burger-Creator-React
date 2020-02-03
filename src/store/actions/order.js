import * as actionTypes from './actions';
import { axiosInstance } from '../../orders';

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
    return (dispatch, getState) => {
        dispatch(purchaseBurgerStart());
        let token = getState().auth.token
        axiosInstance.post('/orders.json?auth=' + token, orderData)
            .then(res => {
                dispatch(initialState());
                dispatch(purchaseBurgerSuccess(res.data.name, orderData, history))
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err));
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
    return (dispatch, getState) => {
        dispatch(fetchOrdersStart());
        const auth = getState().auth.token ? getState().auth.token : undefined;
        const queryParams = '&orderBy="userId"&equalTo="' + getState().auth.userID + '"';
        axiosInstance.get('/orders.json?auth=' + auth + queryParams)
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
            });
    }
}