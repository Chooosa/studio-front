import {constants} from './language.constants';

const INITIAL_STATE = {
    language: 'ru'
}

export const languageReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case constants.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload.lang
            }

        default: 
            return state
        
    }

}