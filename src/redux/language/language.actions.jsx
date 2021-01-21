import {constants} from './language.constants';

export const setLanguage = (lang) => {
    action = {
        type = constants.SET_LANGUAGE,
        payload: lang
    };
    return action;
}