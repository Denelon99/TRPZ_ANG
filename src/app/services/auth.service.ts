import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  apiUrl: string = 'http://127.0.0.1:3000/api/v1/users.json';
  loggedInUser: any; 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const getUsersUrl = `${this.apiUrl}`;
    return this.http.get<any[]>(getUsersUrl).pipe(
      map((users: any[]) => {
        const user = users.find((user) => user.name === username && user.password === password);
        if (user) {
          this.loggedIn = true;
          this.loggedInUser = user;
          return true;
        } else {
          this.loggedIn = false;
          return false;
        }
      })
    );
  }

  registerUser(username: string, password: string, role: number, storageId: number): Observable<any> {
    const createUserUrl = `${this.apiUrl}`;
    const newUser = { role: role, name: username, password: password, storage_id: storageId };
    return this.http.post(createUserUrl, newUser);
  }

  logout(): void {
    this.loggedIn = false;
    this.loggedInUser = null;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
