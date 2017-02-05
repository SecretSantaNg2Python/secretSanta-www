import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public session;
  constructor(private _store: Store<any>) {
    this.session = _store.select('session');
  }
  ngOnInit() {
  }
}
