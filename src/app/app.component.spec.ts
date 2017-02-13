/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutletStubComponent } from './testing/router-stubs';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        RouterOutletStubComponent
      ]
    })
    .compileComponents()
    .then(() => {
       fixture = TestBed.createComponent(AppComponent);
       comp = fixture.componentInstance;
    })
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
