import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { CountryComponent } from './components/country/country/country.component';
import { StateComponent } from './components/State/state/state.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [authGuard]
  },
  {
    path:'country',component:CountryComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'state',
    component: StateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
