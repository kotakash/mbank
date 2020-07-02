import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { NgxSoapService,Client,ISoapMethodResponse } from 'ngx-soap';
import { UserLogin } from './userLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url="http://localhost:8081/login";
  
  constructor(private _http: HttpClient) { }
  login(user: UserLogin){
    return this._http.post<any>(this._url,user);
    }


  //   var sr= '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cus="http://104.198.247.236:8080/customer-ws">'+
  //   '<soapenv:Header/>'+
  //      '<soapenv:Body>'+
  //           '<cus:loginCustomerRequest>'+
  //       '<custId>'+user.CustId+'</custId>'+
  //       '<password>'+user.Password+'</password>'+
  //     '</cus:loginCustomerRequest>'+
  //      '</soapenv:Body>'+
  // '</soapenv:Envelope>';
    // console.log(sr);
    
    // this._http.open('POST',this._url);
    // this._http.setRequestHeader('Content-Type','text/xml');
    // this._http.send(sr);
  //}
  
}
