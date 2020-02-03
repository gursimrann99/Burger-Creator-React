import * as actionTypes from '../actions/actions';

const initialState = {
    token: null,
    userID: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                userID: action.userID,
                loading: false,
                error: null

            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...initialState
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;