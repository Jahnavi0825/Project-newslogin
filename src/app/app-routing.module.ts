import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path : '', component: LoginComponent},//login
  
  {path:'topheading',component:TopheadingComponent},//home
  {path:'tech',component:TechnewsComponent},//tech news

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
