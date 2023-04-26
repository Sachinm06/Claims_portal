import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-console',
  templateUrl: './employee-console.component.html',
  styleUrls: ['./employee-console.component.css']
})
export class EmployeeConsoleComponent {

  user: any
  uArray: any


  constructor(private router: Router, private fb: FormBuilder, private ds: DataService) {
    this.user = localStorage.getItem("currentUser")

    this.ds.viewStatus(JSON.parse(localStorage.getItem("currentstudentid") || "")).subscribe((result: any) => {
      this.uArray = result.transactions
    })
  }

  employeeForm = this.fb.group({
    empid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    date: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]]
  })

  reloadPage() {
    window.location.reload();
  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  

  submitForm() {
    this.reloadPage()
    var empid = this.employeeForm.value.empid
    var date = this.employeeForm.value.date
    var reason = this.employeeForm.value.reason
    var amount = this.employeeForm.value.amount
    if (this.employeeForm.valid) {
      this.ds.empForm(empid, date, reason, amount).subscribe((result: any) => {
        localStorage.setItem("currentAdmin", result.currentAdmin)
        alert(result.message)

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



}
