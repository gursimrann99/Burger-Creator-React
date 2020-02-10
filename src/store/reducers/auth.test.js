import reducer from './auth';

import * as actionTypes from '../actions/actions';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userID: null,
            error: null,
            loading: false
        })
    })
    it('should return initial state', () => {
        expect(reducer({
            token: null,
            userID: null,
            error: null,
            loading: false
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'somevalue',
            userID: 'othervalue'
        })).toEqual({
            token: 'somevalue',
            userID: 'othervalue',
            error: null,
            loading: false
        });
    });
})