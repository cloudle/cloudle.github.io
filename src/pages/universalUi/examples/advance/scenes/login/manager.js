import { utils } from 'react-universal-ui';
const { nativeRouteAction } = utils;
import { register } from '../../utils/routes';

export function navigateLogin () {
	this.props.dispatch(nativeRouteAction.push(register));
}