import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  	<app-navbar></app-navbar>
	<router-outlet></router-outlet>
  </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  []
})
export class AppComponent {
  title = 'app works!';

  constructor(){
  }
}
