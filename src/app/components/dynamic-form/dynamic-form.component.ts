import { Component, Input, OnInit, Inject, ViewChild, TemplateRef }  from '@angular/core';
import { FormGroup, Validators, ValidatorFn }                 from '@angular/forms';

import { QuestionBase }              from 'src/app/_dynamic form/question-base';
import { QuestionControlService }    from 'src/app/_services/question-control.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormPass } from 'src/app/_services/form-pass.service';
import { ModDataService } from 'src/app/_services/mod-data.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
   providers: [ModDataService ]
})
export class DynamicFormComponent implements OnInit {

  questions: Promise <any> //{question: QuestionBase<any>, validators: ValidatorFn [] } []=  [];
  error; 
  form: FormGroup;

  model ;
  recordId;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,private dialog:MatDialog, private push:ModDataService ) {
    this.questions = data.ObsQuestions;
    
    this.form = data.form
    
  }

  ngOnInit() {
     
    
  }

  onSubmit() {
    this.push.edit(this.form.value);
    
  }
}