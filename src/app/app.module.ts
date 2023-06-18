import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoragesComponent } from './storages/storages.component';
import { MyGuardService } from './services/my-guard.service';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddStorageFormComponent } from './add-storage-form/add-storage-form.component';
import { FormsModule } from '@angular/forms';
import { GoodsComponent } from './goods/goods.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    HomeComponent,
    AboutUsComponent,
    StoragesComponent,
    RegistrationComponent,
    LoginComponent,
    AddStorageFormComponent,
    GoodsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [MyGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
