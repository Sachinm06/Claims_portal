import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService, private toastr: ToastrService) { }


  loginForm = this.fb.group({
    empid1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  registerForm = this.fb.group({
    empid2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z_\\s-]+$')]],
    jobt: ['', [Validators.required, Validators.pattern('^[a-zA-Z_-]+$')]],
    loc: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })


  login() {
    var empid1 = this.loginForm.value.empid1
    var psw1 = this.loginForm.value.psw1

    if (this.loginForm.valid) {
      this.ds.login(empid1, psw1).subscribe((result: any) => {

        localStorage.setItem("currentUser", result.currentUser)
        localStorage.setItem("currentUsertitle",result.currentUsertitle)
        localStorage.setItem("currentlocation",result.currentlocation)
        localStorage.setItem("currentempid1", JSON.stringify(result.currentempid1))
        localStorage.setItem("token", JSON.stringify(result.token))

        this.toastr.success(result.message,'Success',{timeOut: 3000,positionClass: 'toast-top-right',
      })
        this.router.navigateByUrl("employee-console")
      },

        result => {
          this.toastr.error(result.error.message,'Error',{timeOut: 3000,positionClass: 'toast-top-right',
        })
        }
      )
    }
    else {
      this.toastr.warning('invalid form','Warning',{timeOut: 3000,positionClass: 'toast-top-right',
    })
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

        this.toastr.success(result.message,'Success',{timeOut: 3000,positionClass: 'toast-top-right',
      })

      },
        result => {
          this.toastr.error(result.error.message,'Error',{timeOut: 3000,positionClass: 'toast-top-right',
        })
          this.router.navigateByUrl("")
        }
      )
    }
    else {
      this.toastr.warning('invalid form','warning',{timeOut: 3000,positionClass: 'toast-top-right',
    })
    }
  }


}
