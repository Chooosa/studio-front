import { CHANGE_COLOR } from './color.consts';

export const changeColor = (color) => ({
   type: CHANGE_COLOR,
   payload: color
})