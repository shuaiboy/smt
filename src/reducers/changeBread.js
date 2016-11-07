import { CHANGE_BREAD } from '../actions/actionTypes';
export default function(state = [{ to: '/', name: '首页' }], action) {
	switch (action.type) {
		case CHANGE_BREAD:
			return action.payload.slice(0);

		default:
			return state;
	}
}