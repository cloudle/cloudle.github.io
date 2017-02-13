import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume }
}

export function switchDocSection (section) {
	return { type: Actions.SwitchDocSection, section };
}