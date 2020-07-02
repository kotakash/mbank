import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _url="http://localhost:8081/register";
  constructor(private _http: HttpClient) { }
  register(user: User){
    return this._http.post<any>(this._url,user);
  }
}
