import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function syncDimensions (dimensions) {
	return { type: Actions.SyncAppDimensions, dimensions };
}

export function setDrawerInstance (instance) {
	return { type: Actions.SetDrawerInstance, instance };
}

export function toggleDrawer (flag) {
	return { type: Actions.ToggleDrawer, flag };
}

export function switchDocSection (section) {
	return { type: Actions.SwitchDocSection, section };
}