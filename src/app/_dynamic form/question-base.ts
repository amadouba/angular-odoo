export class QuestionBase <T>{
    value: T ;
    key:string;
    label:string;
    controlType:string;
    required:boolean;

    constructor(options:{
                value?:T,
                key?:string,
                label?:string,
                controlType?:string,
                required?:boolean } = {}){

                    this.value = options.value;
                    this.key = options.key || '';
                    this.controlType = options.controlType || '';
                    this.label= options.label || '';
                    this.required = !!options.required ;

                }


}