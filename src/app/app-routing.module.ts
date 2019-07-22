import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
