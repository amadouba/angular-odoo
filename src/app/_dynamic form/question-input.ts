import { QuestionBase } from './question-base';

export class InputQuestion <T> extends QuestionBase<T>{
    controlType:'input';
    type:string;

    constructor(options){
        super(options);
        this.type= options['type'] || '';
        

    }
}

