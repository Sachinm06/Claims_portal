import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }


  loginForm = this.fb.group({
    empid1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  registerForm = this.fb.group({
    empid2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    jobt: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    loc: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })


  login() {
    var empid1 = this.loginForm.value.empid1
    var psw1 = this.loginForm.value.psw1

    if (this.loginForm.valid) {
      this.ds.login(empid1, psw1).subscribe((result: any) => {

        localStorage.setItem("currentUser", result.currentUser)
        localStorage.setItem("currentempid1", JSON.stringify(result.currentempid1))
        localStorage.setItem("token", JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl("employee-console")
      },

        result => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert('invalid form')
    }
  }

  register() {
    var empid2 = this.registerForm.value.empid2
    var uname = this.registerForm.value.uname
    var jobt = this.registerForm.value.jobt
    var loc = this.registerForm.value.loc
    var psw2 = this.registerForm.value.psw2

    if (this.registerForm.valid) {
      this.ds.register(empid2, uname, jobt, loc, psw2).subscribe((result: any) => {

        alert(result.message)
        // this.router.navigateByUrl("login()")

      },
        result => {
          alert(result.error.message)
          this.router.navigateByUrl("")
        }
      )
    }
    else {
      alert('invalid form')
    }
  }


}
