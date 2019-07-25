import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { UserComponent } from './components/content/user/user.component';
import { CourseComponent } from './components/content/course/course.component';
import { HomeComponent } from './components/toolbar-content-cont/home/home.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AuthGuard } from './_helpers/auth.guard';



const routes: Routes = [
  {path:'login',component:LoginPageComponent  },
  {path:'home', component:HomeComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: 'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
