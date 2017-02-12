import * as Actions from '../actions';
import { createHistory, createMemoryHistory } from 'history';
import { utils } from 'react-universal-ui';

export const history = utils.isBrowser
	? createHistory()
	: createMemoryHistory();

const initialState = {
	history,
	params: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.BrowserRouterNavigate:
			return browserNavigate(state, action);

		default:
			return state;
	}
}

function browserNavigate (state, action) {
	history.push(action.path, action.params);

	return { ...state, params: action.params };
}