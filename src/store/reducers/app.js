import { Dimensions } from 'react-native';
import * as Actions from '../actions';

import { sideBarMenus } from '../../pages/universalUi/share/SideBar';
import essentialDemo from '../../pages/universalUi/examples/essential';

const initialState = {
	counter: 0,
	drawer: {},
	dimensions: Dimensions.get('window'),
	activeSection: sideBarMenus[0],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		case Actions.SwitchDocSection:
			return { ...state, activeSection: action.section };
		case Actions.SyncAppDimensions:
			return { ...state, dimensions: action.dimensions };
		case Actions.SetDrawerInstance:
			return { ...state, drawer: action.instance };
		default:
			return state;
	}
}