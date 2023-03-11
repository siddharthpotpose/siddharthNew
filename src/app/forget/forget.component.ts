import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
constructor(private obj:UmaService){}
forgetForm=new FormGroup({
  emailId:new FormControl('',[Validators.required,Validators.email]),
  
})
email:any;
forgetMail(){
  this.obj.getForget(this.forgetForm.value.emailId).subscribe(res=>alert(res))
}


}
