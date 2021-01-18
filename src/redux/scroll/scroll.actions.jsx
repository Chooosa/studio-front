import {constants} from './scroll.constants';


export const setScroll = (scroll) => ({
    type: constants.SET_SCROLL,
    payload: scroll
})