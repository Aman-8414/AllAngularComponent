import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7241/api/Employees';
  


  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    debugger;
    return this.http.post(`https://localhost:7241/api/Employees`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  //login(login :any): Observable<any> {
  //  debugger;
  //  return this.http.post<any>(`https://localhost:7241/api/Employees/Login`,login);
 // }
login(login: any): Observable<any> {
    debugger;
    const reqHeader = new HttpHeaders({ 'No-Auth': 'false' });
    return this.http.post<any>(`https://localhost:7241/api/Users/Auth`, login, { headers: reqHeader, responseType: 'text' as 'json' } )
  }

}
