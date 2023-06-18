import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoragesComponent } from './storages/storages.component';
import { MyGuardService } from './services/my-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddStorageFormComponent } from './add-storage-form/add-storage-form.component';
import { GoodsComponent } from './goods/goods.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'storages', component: StoragesComponent, canActivate: [MyGuardService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'creteStorage', component: AddStorageFormComponent},
  { path: 'goods/:id', component: GoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
