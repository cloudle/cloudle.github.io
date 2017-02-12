import * as Actions from '../actions';

import essentialDemo from '../../pages/universalUi/examples/essential';

const initialState = {
	counter: 0,
	demoComponent: essentialDemo,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		default:
			return state;
	}
}