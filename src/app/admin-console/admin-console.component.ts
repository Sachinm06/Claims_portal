import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent {

  claimArray: any;
  claim: any;

  constructor(
    private ds: DataService, 
    private router: Router, 
    private toastr: ToastrService
  ) {
    this.ds.adminLogin().subscribe((response: any) => {
      console.log(response);
      this.claimArray = response.user;
      console.log(this.claimArray);
      this.claimArray = this.claimArray.reverse();
    });
  }

  accept(userN: any) {
    var userN = userN.value;
    this.ds.accept(userN).subscribe((result: any) => {
      this.toastr.success(result.message, 'Success', {
        timeOut: 2000, positionClass: 'toast-top-right',
      })
    },
      result => {
        this.toastr.error(result.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-top-right',
        })
        alert(result.error.message);
      }
    );
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentAcno");
    this.router.navigateByUrl("");
  }

}
