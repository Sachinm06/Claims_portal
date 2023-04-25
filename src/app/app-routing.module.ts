import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeConsoleComponent } from './employee-console/employee-console.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {path:"",component:LoginRegisterComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-console",component:AdminConsoleComponent},
  {path:"employee-console",component:EmployeeConsoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
