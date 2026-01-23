import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserRegister {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http : HttpClient){}
 signup(data: any) {
    return this.http.post(this.apiUrl + 'register/', data);
  }
  //  loginUser(data:any){
  login(data: any) {
    return this.http.post(this.apiUrl + 'login/', data);
  }
}
