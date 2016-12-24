import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:  [QuestionService]
})
export class RegistrationComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
	  this.questions = service.getRegistrationQuestions();
  }

  ngOnInit() {
  }

}
