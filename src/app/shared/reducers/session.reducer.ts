import { ActionReducer, Action } from '@ngrx/store';

import { Session } from '../models/session.interface';

export const SESSION_ACTIONS = {
      REGISTER_USER: {
		ATTEMPT: 'SESSION_GET_USER_ATTEMPT',
		FAILURE: 'SESSION_GET_USER_FAILURE',
		SUCCESS: 'SESSION_GET_USER_SUCCESS'
	}
}

const defaultSession: Session = {
    token: '',
    user: {
        email: ''
    }
}

export const sessionReducer: ActionReducer<Session> = (state: Session = defaultSession, {type, payload}: Action) => {
	console.log('action', type, payload);
	switch(type){
		case SESSION_ACTIONS.REGISTER_ACCOUNT.SUCCESS:
			console.log("Object Assign: ", Object.assign({}, state, {account: payload}))
			return Object.assign({}, state, {account: payload})
		default:
			return state;
	}
}
