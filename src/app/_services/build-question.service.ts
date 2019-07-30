import { Injectable } from '@angular/core';
import { FetchData } from './fetch.data';
import { QuestionBase } from '../_dynamic form/question-base';
import { InputQuestion } from '../_dynamic form/question-input';
import { SelectQuestion } from '../_dynamic form/question-select';
import { from } from 'rxjs';

@Injectable()
export class QuestionService{
    
    constructor(private fetch:FetchData){

    }

    build(model, recordId?: number){
        let fields : string [] = []

        switch(model){
            
            case 'instructor':{
                fields.push('name', 'image','category_id','email','active','instructor')
                return from(this.buildQuestions('res.partner', fields, recordId) )

                break;
            }
            case 'course':{
                fields.push('responsible_id', 'name','description', 'session_ids')
                let a = this.buildQuestions('openacademy.course', fields, recordId)
                // console.log(a)
                let t = from(a)
                // console.log(t)
                return t;

                break;
            }
            case 'session':{
                fields.push('course_id', 'active', 'instructor_id', 'attendee_ids', 'name', 'end_date', 'seats', 'start_date' )
                return from(this.buildQuestions('openacademy.session', fields, recordId))
                break;
            }
        }
       
    }

    private buildQuestions(model: string, fields: string [], recordId?:number){ 

        let questions: QuestionBase<any> [] = [] ;
        let field
        return  this.fetch.call(model,'fields_get', [fields], {'attributes':['string', 'help', 'type','relation','required'] }  )
                    .then(res=> {
                        
                        field = res;
                        if (recordId ){ 
                            let initval ;
                          return  this.fetch.call(model, 'read', [recordId], {'fields':fields} )
                                .then(res=>{
                                    initval = res;
                                    fields.forEach(f => { 
                                        questions.push(this.buildQuestion(field[f],initval[0], f));  
                                      });
                                    //  console.log(questions)
                                    return Promise.resolve(questions);
                                })
                                .catch(err=>{console.log(err)
                                    

                                })
                                
                                
                        }
                       
                        fields.forEach(f => { 
                            questions.push(this.buildQuestion(field[f]));  
                          });

                        return Promise.resolve(questions);
                    })
                    .catch(err=>{
                        console.log(err)
                    });
                    
    }

    private buildQuestion(field, initval?, key?){
        let type = field['type']
        let string = field['string']
        // console.log(field)
        // console.log(key)
        // console.log(initval)
        // console.log(field['relation'])

        let question: QuestionBase<any> = 
                    (type == 'boolean') ? new InputQuestion <boolean>({
                        'controlType':'input',
                        'type':field['type'],
                        'key': key,
                        'label': field['string'],
                        'required':field['required'],
                        // 'help':field['help'] || '',
                        'value':initval[key] || '',
                    
                    }) : (type == 'many2many' || type == 'one2many' || type == 'many2one') ? new SelectQuestion({

                        'type': (type == "many2one") ? false: true,
                        'key': key,
                        'label': field['string'],
                        'required':field['required'],
                        // 'help':field['help'] || '',
                        'options': this.getOptions(field['relation']),
                        'value':initval[key] || '',

                      

                    }) : new InputQuestion<string>({

                        'controlType':'input',
                        'key': key,
                        'label': field['string'],
                        'required':field['required'],
                        // 'help':field['help'] || '',
                        'value':initval[key] || '',
                                                'type':field['type'],



                    })


                    // console.log(question)
        return question;


        
    }

    private getOptions(relation:string){
        if (relation == 'res.partner'){
          return  this.fetch.searchRead(relation, [['instructor' , '=', 'true'], ['category_id.name', 'ilike', 'Teacher']],['id','name'], 0,0 )
                .then(res =>{
                    let options : {key:string, value:string} [] = []
                    res.records.forEach(({name, id}) => {
                        options.push({key:id, value:name});
                    });
                    return options;
                })
                .catch(err=>{
                    console.log(err)
                })

        }
       return this.fetch.searchRead(relation, [],['id','name'], 0,0 )
            .then(res=> {
                let options : {key:string, value:string} [] = []
                    
                    res.records.forEach(({name, id}) => {
                        options.push({key:id, value:name});
                    });
                    return options;
            })
            .catch(err=>{
                console.log(err)
            })

    }
}   