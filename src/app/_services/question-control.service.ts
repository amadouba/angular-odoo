import {Injectable} from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

import { QuestionBase } from '../_dynamic form/question-base';


@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: {question: QuestionBase<any>, validators:ValidatorFn[]} [] ) {
    let group: any = {};
    console.log(questions)
    questions.forEach(question => {
      group[question.question. key] = new FormControl(question.question.value || '', question.validators  ) 
    });
    console.log(group)
    return new FormGroup(group); 
  }

  
}


