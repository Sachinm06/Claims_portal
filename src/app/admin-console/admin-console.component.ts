import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent {

  claimArray:any
  claim:any

  constructor(private ds: DataService, private router: Router) {
    this.ds.adminLogin().subscribe((response: any) => {
      console.log(response);
      
      this.claimArray = response.user
      console.log(this.claimArray);
      
      
      
    });
  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

}