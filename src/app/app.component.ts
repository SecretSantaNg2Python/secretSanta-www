import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Session } from './shared/models/session.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [user]="user"></app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  []
})
export class AppComponent {
  title = 'app works!';
  user;

  constructor(private _store: Store<any>){
    _store.select('session').subscribe((session: Session) => this.user = session.user);
  }
}
