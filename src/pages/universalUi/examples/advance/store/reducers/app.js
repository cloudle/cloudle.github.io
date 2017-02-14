import * as Actions from '../actions';
import { utils } from 'react-universal-ui';
import { localize } from '../../utils';

const initialState = {
  counter: 0,
	localize: localize('eng'),
	drawerLock: true,
};

export default utils.appReducer((state = initialState, action) => {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		case Actions.ChangeAppLocalize:
			return { ...state, localize: localize(action.lang) };
		case Actions.ToggleDrawerLock:
			return { ...state, drawerLock: action.flag || !state.drawerLock };
		default:
			return state;
	}
})