import { CHANGE_BREAD } from '../actions/actionTypes';
export default function(state = '/', action) {
	switch (action.type) {
		case CHANGE_BREAD:
			return action.payload.concat();

		default:
			return state;
	}
}