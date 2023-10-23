import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum UsersEndpoints { 
  LOGIN = 'http://localhost:5222/api/sessions'
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _httpService: HttpClient) {}

  public login(): Observable<any> {
    return this._httpService.post<any>(UsersEndpoints.LOGIN, {
      email: 'marcofiorito1@gmail.com',
      password: '1234',
      Token: '1',
    });
  }
}