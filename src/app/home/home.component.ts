import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Session } from '../shared/models/session.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;

  constructor(private _store: Store<any>) {
    _store.select('session').subscribe((session: Session) => this.user = session.user);
  }

  ngOnInit() {
  }

}
