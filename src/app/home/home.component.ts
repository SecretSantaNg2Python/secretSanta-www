import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable'
import { Session } from '../shared/models/session.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public session;
  private subscription;
  constructor(private _store: Store<any>) {
    this.session = _store.select('session');
  }
  ngOnInit() {
  }
}