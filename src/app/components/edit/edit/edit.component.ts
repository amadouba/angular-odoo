import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/_dynamic form/question-base';
import { QuestionValidService } from 'src/app/_services/build-validators';
import { FetchData } from 'src/app/_services/fetch.data';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;
import { Observable, of, from } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { QuestionControlService } from 'src/app/_services/question-control.service';
import { QuestionService } from 'src/app/_services/build-question.service';
import { ValidatorFn, FormGroup } from '@angular/forms';
import { FormPass } from 'src/app/_services/form-pass.service';
import { ModDataService } from 'src/app/_services/mod-data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [
    // [{ provide: FetchData, useExisting: OdooRPCService }],
    ModDataService,
    QuestionControlService,

    QuestionValidService,
    QuestionService
    ]

})
export class EditComponent implements OnInit {
  questions : Promise<any> ;
  form:FormGroup;
  showQuestionError   ;
  temp ;

  @Input() model:string;
  // @Input() initvalues: {key: string , val :string}[] ;
  @Input() recordId : number ;

  deploy:boolean;
  
  constructor(private dialog:MatDialog , private qb: QuestionValidService, private qcs: QuestionControlService, private push:ModDataService) { 
   
  }

  ngOnInit() {
  }

  onClickEdit(){
    let $this = this;

    
    this.qb.getQuestions(this.model, this.recordId)
      .then(( res :  {question: QuestionBase<any>, validators:ValidatorFn[]} [])  =>{

        this.form  = this.qcs.toFormGroup(res)
        this.questions = Promise.resolve(res)
        console.log(this.form)
        
        this.push.recordId = this.recordId;
        this.model = this.push.model;
        

        this.dialog.open(DynamicFormComponent, {
            minWidth:'500px',

            data: { ObsQuestions: this.questions, recordId:this.recordId, form:this.form },
        })
      })
      .catch(err=>{
        console.log(err);
        $this.showQuestionError = Promise.resolve(err)

      })
    


    
    

    
  }
}
