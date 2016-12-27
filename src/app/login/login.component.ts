import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [QuestionService]
})
export class LoginComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
	  this.questions = service.getLoginQuestions();
  }

  ngOnInit() {
  }

}
