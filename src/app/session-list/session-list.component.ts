import { Component, OnInit } from '@angular/core';
import { FetchData } from '../fetch.data';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
  providers: [{ provide: FetchData, useExisting: OdooRPCService }]

})
export class SessionListComponent implements OnInit {

  sessions: Promise<any>;
  constructor(private fetch: FetchData) { }

  ngOnInit() {
    this.fetch.searchRead('openacademy.session',[], ['name', 'start_date','end_date', 'instructor_id'], 0 , 0)
    .then(res =>{
        
        this.sessions = Promise.resolve(res.records);
    }).catch(err=>{
      console.log(err);
    });
  }
}
