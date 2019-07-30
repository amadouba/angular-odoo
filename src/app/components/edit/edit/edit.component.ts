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


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [
    QuestionControlService, FormPass,

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
  
  constructor(private dialog:MatDialog , private qb: QuestionValidService, private qcs: QuestionControlService, private fo:FormPass) { 
    
  }

  ngOnInit() {
  }

  onClick(){
    let $this = this;

    // this.qb.getQuestions(this.model, this.recordId)
    //   .then(( res :  {question: QuestionBase<any>, validators:ValidatorFn[]} [])  =>{
    //     let form  = $this.qcs.toFormGroup(res)
    //     this.questions = Promise.resolve(res)

    //      this.fo.form = form
    //     this.fo.questions = this.questions
      
    //     this.deploy = true;

        
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //     $this.showQuestionError = Promise.resolve(err)

    //   })

    
    this.qb.getQuestions(this.model, this.recordId)
      .then(( res :  {question: QuestionBase<any>, validators:ValidatorFn[]} [])  =>{
        let form  = this.qcs.toFormGroup(res)
        this.questions = Promise.resolve(res)
        this.fo.form = form 
        this.fo.questions = this.questions
        this.dialog.open(DynamicFormComponent, {
          width:'800px',
          data: { ObsQuestions: this.questions, error:$this.showQuestionError, questions: res, form:form },
        })
      })
      .catch(err=>{
        console.log(err);
        $this.showQuestionError = Promise.resolve(err)

      })
    


    
    

    
  }
}
