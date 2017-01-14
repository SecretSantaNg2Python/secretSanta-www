import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Actions, Effect } from '@ngrx/effects';

import { SessionService } from '../services/session.service';
import { SESSION_ACTIONS } from '../reducers/session.reducer';

@Injectable()
export class SessionEffects {
	
	constructor(
		private sessionService: SessionService,
		private actions$: Actions,
	){}

	@Effect() registerUser$ = this.actions$
		.ofType(SESSION_ACTIONS.REGISTER_USER.ATTEMPT)
		.map(action => action.payload)
		.switchMap(payload => this.sessionService.registerUser(payload));

}