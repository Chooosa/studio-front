import {constants} from './content.constants';

const INITIAL_STATE = {
    content: {
        cases: {
            apps: [],
            websites: []
        },
        services: undefined
    },
    loading: false,
    error: undefined
}

export const contentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.FETCH_CONTENT_PENDING:
            return {
                ...state,
                loading: true
            }
        case constants.FETCH_CONTENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case constants.FETCH_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                content: action.payload
            }
        default:
            return state;
    }
}