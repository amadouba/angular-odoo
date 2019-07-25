import { Component, OnInit, Input } from '@angular/core';
import { FetchData } from '../../../_services/fetch.data';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;


@Component({
  selector: 'byattendee',
  templateUrl: './byattendee.component.html',
  styleUrls: ['./byattendee.component.css'],
  providers: [{ provide: FetchData, useExisting: OdooRPCService }]

})
export class ByattendeeComponent implements OnInit {
  // sessionsfetched : [{}]; //session details fetched
  sessions: Promise<any>;
  attendees: Promise<any>;
  constructor(private fetch: FetchData) { }

  ngOnInit() {
   
    this.fetch.searchRead('openacademy.session',[], ['name', 'start_date','end_date','instructor_id','attendee_ids'], 0 , 0)
    .then(res =>{
        this.sessions = Promise.resolve(res.records);
    }).catch(err=>{
      console.log(err);
    });


 
  }

  open(is){

      this.fetch.call('res.partner', 'read',[is], {'fields': ['name']})
    .then(res =>{
        console.log(res);

        this.attendees = Promise.resolve(res);
        // this.sessionsfetched.push(res.records);
    }).catch(err=>{
      console.log(err);
    });
    
  }
}
