import { ActionReducer, Action } from '@ngrx/store';

import { Session } from '../models/session.interface';

export const SESSION_ACTIONS = {
	REGISTER_USER: {
		ATTEMPT: 'SESSION_REGISTER_USER_ATTEMPT',
		FAILURE: 'SESSION_REGISTER_USER_FAILURE',
		SUCCESS: 'SESSION_REGISTER_USER_SUCCESS'
	}
}

const defaultSession: Session = {
	token: '',
	user: {}
}

export const sessionReducer: ActionReducer<Session> = (state: Session = defaultSession, {type, payload}: Action) => {
	console.log('action', type, payload);
	switch(type){
		case SESSION_ACTIONS.REGISTER_USER.SUCCESS:
			return Object.assign({}, state, payload)
		default:
			return state;
	}
}

// todo: payload comes back undefined