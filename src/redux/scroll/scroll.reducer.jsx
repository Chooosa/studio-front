import {constants} from './scroll.constants';

const INITIAL_STATE = {
    to: undefined
}

export const scrollReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.SET_SCROLL:
            return {
                to: action.payload
            }
        default: 
            return state
    }
}