import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private obj:UmaService){}
 
loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  pwd:new FormControl('',[Validators.required,Validators.minLength(3)])
})

login(){
  this.obj.loginPostMethod(this.loginForm.value).subscribe(res=>alert("Login Successfull " +res))
}
}
