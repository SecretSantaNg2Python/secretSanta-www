import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  questions: any[];

  constructor(questionService: QuestionService) {
	  this.questions = questionService.getLoginQuestions();
  }

  ngOnInit() {
  }

  onSubmitLoginForm(payload){
    console.log('login form', payload)
  }

}
