import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../_dynamic form/question-base';

@Injectable()
export class FormPass{
    form : FormGroup;
    questions: Promise<any>;
}