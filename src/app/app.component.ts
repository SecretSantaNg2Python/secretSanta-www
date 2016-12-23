import { Component } from '@angular/core';
import { QuestionService } from './shared/services/question.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
	<h2>Registration</h2>
	<dynamic-form [questions]="questions"></dynamic-form>
  </div>
	`,
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'app works!';
  questions: any[];

  constructor(service: QuestionService){
	  this.questions = service.getRegistrationQuestions();
  }
}
