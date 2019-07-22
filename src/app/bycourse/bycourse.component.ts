import { Component, OnInit, Input } from '@angular/core';
import { FetchData } from '../fetch.data';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';


@Component({
  selector: 'bycourse',
  templateUrl: './bycourse.component.html',
  styleUrls: ['./bycourse.component.css'],
  providers: [{ provide: FetchData, useExisting: OdooRPCService }]

})
export class BycourseComponent implements OnInit {
  @Input() session_ids;
  sessions: Promise<any>;
  constructor(private fetch: FetchData) { }

  ngOnInit() {
    this.fetch.call('openacademy.session','read',[this.session_ids],{'fields':['name','start_date','end_date','instructor_id']})
              .then(res =>{

                  this.sessions = Promise.resolve(res);
              }).catch(err=>{
                console.log(err);
              });
  }

}
