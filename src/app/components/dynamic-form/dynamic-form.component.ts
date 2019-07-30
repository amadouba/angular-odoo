import { Component, Input, OnInit, Inject, ViewChild, TemplateRef }  from '@angular/core';
import { FormGroup, Validators, ValidatorFn }                 from '@angular/forms';

import { QuestionBase }              from 'src/app/_dynamic form/question-base';
import { QuestionControlService }    from 'src/app/_services/question-control.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormPass } from 'src/app/_services/form-pass.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [              QuestionControlService, FormPass
  ]
})
export class DynamicFormComponent implements OnInit {

  questions: Promise <any> //{question: QuestionBase<any>, validators: ValidatorFn [] } []=  [];
  initvalues ;
  error; 
  form: FormGroup;
  payLoad = '';
  formReady:boolean = false;

  @Input() model ;
  @Input() recordId;

  @ViewChild('dialog',{static: true}) callAPIDialog: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,private dialog:MatDialog, private fo:FormPass ) {
    this.questions = data.ObsQuestions;
    this.error = data.error;
    this.form = data.form
    // this.fo.form = this.form
    // this.fo.questions = this.questions
    // this.form = data.form;
    // this.form = this.fo.form;
    // this.questions = this.fo.questions;
    console.log(this.form)
    console.log(data.questions)
    
  }

  ngOnInit() {
    // this.form = this.qcs.toFormGroup(data.questions);
    console.log(this.form)
   

     // ngOnChanges(changes:SimpleChange){
  //   for (let propName in changes ){
  //     let changedProp = changes[propName];
  //     if ('isAuthenticated' == propName){
  //       this.isAuthenticatedChange.emit(changedProp.currentValue);
  //     }
  //   }

  // }

    // let $this = this
    // this.questions
    // .then(res=>{
    //   $this.questions = Promise.resolve(res);
    //   $this.formReady = true;
    // }).catch(err=>{ObsQuestions
    //   console.log(err)
    // })
        
    
  }

  onSubmit() {
    
    this.payLoad = JSON.stringify(this.form.value);
  }
}