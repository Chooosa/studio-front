import { combineReducers } from 'redux';
import { colorReducer } from './color/color.reducer';
import { contentReducer } from './content/content.reducer';
import { scrollReducer } from './scroll/scroll.reducer';

export const rootReducer = combineReducers({
   color: colorReducer,
   content: contentReducer,
   scroll: scrollReducer
})