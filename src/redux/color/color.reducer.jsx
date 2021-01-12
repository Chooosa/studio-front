import { CHANGE_COLOR } from './color.consts';

const color0 = '#68D87A';
const color1 = '#EE2A4E';
const color2 = '#FF8A00';
const color3 = '#3FB755';
const color4 = '#2EBEF5';
const color5 = '#2A66F5';
const color6 = '#D92AF5';
const color7 = '#772AF5';

const INITIAL_STATE = {
   color: 0,
   themeColor: color0
}

const returnColor = (color) => {
   switch (color) {
      case 0:
         return color0;
      case 1:
         return color1;
      case 2:
         return color2;
      case 3:
         return color3;
      case 4:
         return color4;
      case 5:
         return color5;
      case 6:
         return color6;
      case 7:
         return color7;
      default:
         return color0;
   }
}

export const colorReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CHANGE_COLOR:
         return {
            ...state,
            color: action.payload,
            themeColor: returnColor(action.payload)
         }
      default:
         return state
   }
}