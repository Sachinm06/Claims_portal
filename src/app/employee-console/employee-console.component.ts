import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-console',
  templateUrl: './employee-console.component.html',
  styleUrls: ['./employee-console.component.css']
})
export class EmployeeConsoleComponent {

  user: any
  role: any
  location: any
  uArray: any


  constructor(private router: Router, private fb: FormBuilder, private ds: DataService, private toastr: ToastrService) {
    this.user = localStorage.getItem("currentUser")
    this.role = localStorage.getItem("currentUsertitle")
    this.location = localStorage.getItem("currentlocation")

    this.ds.viewStatus(JSON.parse(localStorage.getItem("currentempid1") || "")).subscribe((result: any) => {
      this.uArray = result.claims
      this.uArray = this.uArray.reverse();

    })
  }

  employeeForm = this.fb.group({
    empid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    date: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]]
  })

  // reloadPage() {
  //   window.location.reload();
  // }
  reloadPage() {
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }



  submitForm() {
    // this.reloadPage()
    var empid = this.employeeForm.value.empid
    var date = this.employeeForm.value.date
    var reason = this.employeeForm.value.reason
    var amount = this.employeeForm.value.amount
    if (this.employeeForm.valid) {
      this.ds.empForm(empid, date, reason, amount).subscribe((result: any) => {
        localStorage.setItem("currentAdmin", result.currentAdmin)

        this.toastr.success(result.message);

      },
        result => {
          this.toastr.error(result.error.message)
        }
      )
    }
    else {
      this.toastr.warning('invalid form')
    }
    this.reloadPage()

  }


  deleteClaim(claimid: string) {

    console.log(claimid);
    this.ds.deleteClaim(claimid).subscribe((result: any) => {
      this.toastr.success(result.message, 'Success', {
        timeOut: 3000, positionClass: 'toast-top-right',
      })
      this.reloadPage()
    },
      result => {
        this.toastr.error(result.error.message)
        // alert(result.error.message)
      }
    )
  }



}
