import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
              <md-card>
                This page doesn't exist
                <br><br>
                <a md-button [routerLink]="['/']">Return to safety</a>
              </md-card>
              `,
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // This sends the user back to the root after 2 seconds
    setTimeout(() => this.router.navigate(['/']), 2000);
  }

}
