import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { EmployeeConsoleComponent } from './employee-console/employee-console.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    AdminLoginComponent,
    AdminConsoleComponent,
    EmployeeConsoleComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
