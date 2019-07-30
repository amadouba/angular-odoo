import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../_services/fetch.data';
import { OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;
import { UserService } from '../../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [{ provide: FetchData, useExisting: OdooRPCService }]
})
export class CourseComponent implements OnInit {
  isViewable: boolean = false; 
  courses: Promise<any>;
  model = "course"

  constructor(private fetch: FetchData, private usrService: UserService, private router:Router) { this.isViewable = true; }

  ngOnInit() {
    
      this.fetch.searchRead('openacademy.course',[], ['name', 'description','session_ids'], 0 , 0)
              .then(res =>{
                  this.courses = Promise.resolve(res.records);
              }).catch(err=>{
                  console.log(err);
              });
    
    
  }
  

  

}
