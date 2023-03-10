import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
constructor(private obj:UmaService){}
forgetForm=new FormGroup({
  emailId:new FormControl(''),

})
email:any;
forgetMail(){
  this.obj.getForget(this.forgetForm.value.emailId).subscribe(res=>alert(res))
}


}
