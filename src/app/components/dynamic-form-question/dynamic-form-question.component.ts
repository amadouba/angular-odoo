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
  constructor(private fo: FormPass){
    this.form = this.fo.form 
    
    console.log(this.form)
    console.log(this.question)
  }
  ngOnInit(){
    console.log(this.form)
    console.log(this.question)
  }
  get isValid() { 
    console.log(this.form)
    console.log(this.question)
    return this.form.controls[this.question.key].valid; }

    
}