import * as actionTypes from '../actions/actions';

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 10,
    meat: 30,
    egg: 15
}
const initialState = {
    ingredients: {
        salad: 0,
        egg: 0,
        cheese: 0,
        meat: 0
    },
    price: 25
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                price: state.price + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                price: state.price - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.BURGER_CREATION:
            return {
                ...initialState
            }

        default:
            return state;
    }
};

export default reducer;