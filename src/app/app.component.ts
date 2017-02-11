import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SESSION_ACTIONS } from './shared/reducers/session.reducer';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar [user]="(session | async)?.user" (onSignOut)="onSignOut($event)">
  </app-navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  session;

  checkLocalStorage(){
    if(localStorage['Authorization']){
      return this.getUser();
    }
  }

  constructor(private _store: Store<any>){
    this.session = _store.select('session');
  }

  getUser(){
    this._store.dispatch({
      type: SESSION_ACTIONS.GET_USER.ATTEMPT,
      payload: {},
    })
  }

  ngOnInit(){
    this.checkLocalStorage();
  }

  onSignOut(){
    this._store.dispatch({
      type: SESSION_ACTIONS.LOGIN_USER.ATTEMPT,
      payload: {}
    })
  }
}
