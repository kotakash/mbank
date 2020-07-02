import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public welcome = "User Registration";
  public result;
  public resultErr;
  public resultCol;
  
  userModel = new User('','',0,'','','','','','','');
  constructor(private _registerService: RegisterService) { }

  ngOnInit(): void {
  }
  onRegister(){
    this._registerService.register(this.userModel)
    .subscribe(data => {if (data.includes('Customer registered'))
    {this.result=data;this.resultCol="darkgreen";} 
  else {this.result=data;this.resultCol="red";}},error => this.resultErr = error);
    //this.result="Registered successfully";
  }
}
