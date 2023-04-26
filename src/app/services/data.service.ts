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

  empForm(studentid: any, date: any, reason: any, depname: any): Observable<any> {
    const data = { studentid, date, reason, depname };
    return this.http.post<any>('http://localhost:3001/sregister', data);
  }

  viewStatus(studentid: any) {

    const data = { studentid }
    return this.http.post('http://localhost:3001/viewStatus', data)
  }

}
