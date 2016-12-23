import { Injectable }       from '@angular/core';
import { DropdownQuestion } from '../models/question-dropdown.model';
import { TextboxQuestion }  from '../models/question-textbox.model';
import { QuestionBase }     from '../models/question.model';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getRegistrationQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        value: 'santa@northpole.com',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        type: 'password',
        order: 2
	}),
		new TextboxQuestion({
		  key: 'password-verification',
		  label: 'Verify Password',
		  type: 'password',
		  order: 2
		})
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getLoginQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        value: 'santa@northpole.com',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        type: 'password',
        order: 2
	  })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
