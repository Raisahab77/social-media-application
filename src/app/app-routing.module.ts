import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'dashboard', canActivate:[LoginGuard], component:DashboardComponent},
  {path:'signup',component:SignupComponent},
  {path:'about-me', canActivate:[LoginGuard], component:AboutMeComponent},
  {path:'**',component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
