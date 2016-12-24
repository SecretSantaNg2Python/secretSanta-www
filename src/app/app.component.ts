import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  	<app-navbar></app-navbar>
	<nav>
	<a routerLink="/registration">Registration</a>
	<a routerLink="/login">Login</a>
	<a routerLink="/pageNotFound">Page Not Found</a>
	</nav>
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
