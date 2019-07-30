import { QuestionService } from './build-question.service';
import { Injectable } from '@angular/core';
import { InputQuestion } from '../_dynamic form/question-input';
import { Validators, ValidatorFn } from '@angular/forms';
import { QuestionControlService } from './question-control.service';
import { QuestionBase } from '../_dynamic form/question-base';
import { of, Observable } from 'rxjs';

@Injectable()
export class QuestionValidService{
    // questions: ;
    constructor(private qcs: QuestionControlService, private qb : QuestionService){
        
    }

    getQuestions(model, recordId?: number){
        let quest : Observable<any> ; 
        
        return  this.qb.build(model, recordId).toPromise()
            .then((x : QuestionBase<any>[])=>{
                console.log("x, ",x);
                let temp = x.map(el=>{
                    // Validators 
                    let validators : ValidatorFn [] = [];
                    el.required ? validators.push(Validators.required):''
                    el.key == "email" ? validators.push(Validators.email):'' ; 
                    if (el instanceof InputQuestion){
                        (el as InputQuestion<string | boolean>).type ==("integer" || "float")  ? (el as InputQuestion<string | boolean>).type = "number":
                        (el as InputQuestion<string | boolean>).type ==("char" || "text" || "html") ? (el as InputQuestion<string | boolean>).type = "text":
                        (el as InputQuestion<string | boolean>).type ==  ("datetime") ? (el as InputQuestion<string | boolean>).type = "datetime-local":
                        ( ((el as InputQuestion<string | boolean>).type == "binary") && ((el as InputQuestion<string | boolean>).key == "image" )) ? (el as InputQuestion<string | boolean>).type = "image":
                        (el as InputQuestion<string | boolean>).type == "boolean" ? (el as InputQuestion<string | boolean>).type = "checkbox":
                        ""
                    }
                    // this.qcs.toFormGroup([{question:el, validators}])
                    let obj = {question: el, validators} ;
                    return obj
                })

                return Promise.resolve(temp);


            }).catch(err=>{
                console.log(err);
            })
         
        //  subscribe({
        //     next(x: ){
               
        //         }) 


        //         quest = of(temp);
        //     },
        //     error(err){
        //         console.log("WEIRD")
        //         console.log(err);
        //         quest = of(err);

        //     }
        // })

        // return quest;
       
        
        
        
    }

}