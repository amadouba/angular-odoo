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
import { LoginComponent } from './components/login/login/login.component';
import { UserComponent } from './components/content/user/user.component';
import { LeftnavComponent } from './components/navigation/leftnav/leftnav.component';
import { RightnavComponent } from './components/navigation/rightnav/rightnav.component';
import { MaincontentComponent } from './components/content/maincontent/maincontent.component';
import { CourseComponent } from './components/content/course/course.component';
import { SessionComponent } from './components/content/session/session.component';
import { HomeComponent } from './components/toolbar-content-cont/home/home.component';
import { BycourseComponent } from './components/content/bycourse/bycourse.component';
import { ByattendeeComponent } from './components/content/byattendee/byattendee.component';
import { ByinstructorComponent } from './components/content/byinstructor/byinstructor.component';
import { SessionListComponent } from './components/content/session-list/session-list.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';



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
    LoginPageComponent,
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
