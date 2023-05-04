import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './route-guard.service'
import { LogoutComponent } from './logout/logout.component';
import { SightingsComponent } from './sightings/sightings.component';

const routes: Routes = [
  { path:'', component:HomeComponent, canActivate : [RouteGuardService] },
  { path:'home', component:HomeComponent, canActivate : [RouteGuardService] },
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent, canActivate : [RouteGuardService] },
  { path:'logout', component:LogoutComponent},
  { path: 'sightings', component:SightingsComponent, canActivate : [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
