import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../userLogin';
import { LoginService } from '../login.service';
// import { NgxSoapService,Client,ISoapMethodResponse } from 'ngx-soap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public welcome = "Login";
  //client: Client;
  public result;
  public resultErr;
  public resultCol;
  userLoginModel = new UserLogin(0,'');
  constructor(private _loginService: LoginService) { 
    

  }

  ngOnInit(): void {
  }
  onLogin(){
    
    this._loginService.login(this.userLoginModel)
    .subscribe(data => {if (data.includes('SUCCESS. Login Successful'))
  {this.result=data;this.resultCol="darkgreen"} else {this.result=data,this.resultCol="red";}
  }, error => this.resultErr=error)
    
  }
}
