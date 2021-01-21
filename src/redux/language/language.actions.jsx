import {constants} from './language.constants';

export const setLanguage = (lang) => {
    const action = {
        type: constants.SET_LANGUAGE,
        payload: {lang}
    };
    return action;
}