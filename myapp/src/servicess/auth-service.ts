import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {

  }
  private apiUrl = 'http://localhost:8000/api/members/';
  getMemberList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


}
