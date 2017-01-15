import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Session } from './shared/models/session.interface';
import { SESSION_ACTIONS } from './shared/reducers/session.reducer';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [user]="(session | async)?.user" (onSignOut)="onSignOut($event)"></app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  []
})
export class AppComponent implements OnInit {
  title = 'app works!';
  session;

  checkLocalStorage(){
    if (localStorage['Authorization']) return this.getUser();
  }

  constructor(private _store: Store<any>){
    this.session = _store.select('session');
  }

  getUser(){
    this._store.dispatch({
      type: SESSION_ACTIONS.GET_USER.ATTEMPT,
      payload: {}
    });
  }

  ngOnInit(){
    this.checkLocalStorage();
  }

  onSignOut(){
    console.log('sign out');
  }
}
