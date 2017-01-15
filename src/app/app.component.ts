import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Session } from './shared/models/session.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [user]="user" (onSignOut)="onSignOut($event)"></app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  []
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user;

  checkLocalStorage(){
    if (localStorage['Authorization']) return this.getUser();
  }

  constructor(private _store: Store<any>){
    _store.select('session').subscribe((session: Session) => this.user = session.user);
  }

  getUser(){
    // need to create this session action
    // this._store.dispatch({
    //   type: SESSION_ACTIONS.GET_USER.ATTEMPT,
    //   payload: { }
    // });
  }

  ngOnInit(){

  }

  onSignOut(){
    console.log('sign out');
  }
}
