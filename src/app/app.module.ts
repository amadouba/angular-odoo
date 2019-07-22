import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import { FormsModule } from '@angular/forms';
import { CustomMatModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc'
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CourseComponent } from './course/course.component';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { BycourseComponent } from './bycourse/bycourse.component';
import { ByattendeeComponent } from './byattendee/byattendee.component';
import { ByinstructorComponent } from './byinstructor/byinstructor.component';
import { SessionListComponent } from './session-list/session-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    LeftnavComponent,
    RightnavComponent,
    MaincontentComponent,
    CourseComponent,
    SessionComponent,
    HomeComponent,
    BycourseComponent,
    ByattendeeComponent,
    ByinstructorComponent,
    SessionListComponent,
  ],
  imports: [
    BrowserModule, 
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMatModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [HttpClientModule, OdooRPCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
