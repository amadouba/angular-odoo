import { Injectable } from '@angular/core';
import { FetchData } from './fetch.data';

@Injectable()
export class ModDataService{    
    recordId;
    model:string;

    constructor(private fetch:FetchData){
        
    }

        edit(data){
            console.log(data);
            console.log(this.model)
            console.log(this.recordId)

        }


}