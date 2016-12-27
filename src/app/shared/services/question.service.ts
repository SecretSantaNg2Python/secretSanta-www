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
   	   	key: 'username',
   	   	label: 'Username',
   	   	required: true,
   	   	order: 1
   	   }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
		label: 'Password',
		required: true,
        order: 2
	})
		// Dynamic input, error message for non-matching passwords and block save
		// new TextboxQuestion({
		//   key: 'verify_password',
		//   label: 'Verify Password',
		//   required: true,
		//   order: 2
		// })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getLoginQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'email',
		label: 'Email',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'password',
		label: 'Password',
		required: true,
        order: 2
	  })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
