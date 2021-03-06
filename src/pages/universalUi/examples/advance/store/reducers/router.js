import { utils } from 'react-universal-ui';
import { initialRoute } from '../../utils/routes';

const initialRouterState = {
	routes: [initialRoute],
};

export default utils.nativeRouteReducer(
	(state = initialRouterState, action) => {
		switch (action.type) {
			default:
				return state;
		}
	}
);