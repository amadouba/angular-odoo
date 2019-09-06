import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from 'src/app/_dynamic form/question-base';
import { FormPass } from 'src/app/_services/form-pass.service';


function defaultErrorStateMatcher(control, form) {
  var /** @type {?} */ isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.touched || isSubmitted));
} 

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor(){
    
    
    
  }
  ngOnInit(){
    
  }
  get isValid() { 
    
    return this.form.controls[this.question.key].valid; }

    
}