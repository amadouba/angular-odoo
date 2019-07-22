import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.data';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;



@Component({
  selector: 'byinstructor',
  templateUrl: './byinstructor.component.html',
  styleUrls: ['./byinstructor.component.css'],
  providers: [{ provide: FetchData, useExisting: OdooRPCService }]


})
export class ByinstructorComponent implements OnInit {
  instructors : Promise<any>;
  session:Promise<any>;
  constructor(private fetch:FetchData) { }

  ngOnInit() {
    this.fetch.searchRead('res.partner',[['instructor', '=','true']],['name','sesh_ids'],0,0)
              .then(res =>{
                  console.log(res.records)
                  this.instructors = Promise.resolve(res.records);
              }).catch(err=>{
                console.log(err);
              });
  }

  open(id){
    if(id.length > 0){
      this.fetch.call('openacademy.session','read',id,{'fields':['name']})
        .then(res =>{

            this.session = Promise.resolve(res);
            // this.sessionsfetched.push(res.records);
        }).catch(err=>{
          console.log(err);
        });
    }else{
      this.session = Promise.resolve([]);
    }
      
  
}

}
