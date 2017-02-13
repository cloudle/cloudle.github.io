import * as Actions from '../actions';

import { sideBarMenus } from '../../pages/universalUi/share/SideBar';
import essentialDemo from '../../pages/universalUi/examples/essential';

const initialState = {
	counter: 0,
	activeSection: sideBarMenus[0],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		case Actions.SwitchDocSection:
			return { ...state, activeSection: action.section };
		default:
			return state;
	}
}