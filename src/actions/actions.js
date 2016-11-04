import { createAction } from 'redux-action';
import {
	CHANGE_BREAD
} from './actionTypes';

console.log('asdf', CHANGE_BREAD);
export const changeBread = createAction(CHANGE_BREAD);