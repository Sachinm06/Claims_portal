import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder, private toastr: ToastrService) { }

  adminForm = this.fb.group({
    adminid: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]],
    apsw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  adminlogin() {
    var adminid = this.adminForm.value.adminid
    var apsw = this.adminForm.value.apsw
    if (this.adminForm.valid) {
      if (adminid == "admin" && apsw == "admin") {
        this.toastr.success("login success",'Success',{timeOut: 3000,positionClass: 'toast-top-right',
      })
        this.router.navigateByUrl("admin-console")
      }
      else {
        this.toastr.error("Incorrect username or password",'Error',{timeOut: 3000,positionClass: 'toast-top-right',
      })
      }
    }
    else {
      this.toastr.warning("invalid form",'Warning',{timeOut: 3000,positionClass: 'toast-top-right',
    })
    }
  }


}
