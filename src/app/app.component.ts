import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  []
})
export class AppComponent {
  title = 'app works!';
  session;

  constructor(private _store: Store<any>){
    _store.select('session').subscribe(session => this.session = session);
  }
}
