import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  questions: any[];

  constructor(questionService: QuestionService) {
	  this.questions = questionService.getRegistrationQuestions();
  }

  ngOnInit() {
  }

  onSubmitRegistrationForm(payload){
    console.log('onSubmitRegistrationForm', payload)
	//dispatch action to the store.
  }

}
