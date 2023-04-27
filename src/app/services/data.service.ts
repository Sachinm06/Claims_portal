import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  login(empid1: any, psw1: any) {
    const data = { empid1, psw1 }
    return this.http.post('http://localhost:3001/login', data)
  }

  register(empid2: any, uname: any, jobt: any, loc: any, psw2: any) {
    const data = { empid2, uname, jobt,loc,psw2 }
    return this.http.post('http://localhost:3001/register', data)
  }

  empForm(empid: any, date: any, reason: any, amount: any) {
    const data = { empid, date, reason, amount };
    return this.http.post('http://localhost:3001/empForm', data);
  }

  viewStatus(empid1: any) {

    const data = { empid1 }
    return this.http.post('http://localhost:3001/viewStatus', data)
  }

  deleteClaim(claimid:any){
    const data={claimid}
    return this.http.post('http://localhost:3001/deleteClaim',data)
  }
 

}
