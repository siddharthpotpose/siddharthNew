import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {

  constructor(private unlockObj:UmaService){}
 
  unlockForm=new FormGroup({
    confirmPwd:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl(' ',[Validators.required,Validators.email]), 
    newPwd: new FormControl(' ',[Validators.required,Validators.minLength(3)]),
    tempPwd: new FormControl(' ',[Validators.required,Validators.minLength(3)])

  })
  unlock(){ 
    this.unlockObj.postUnlock(this.unlockForm.value).subscribe(res=>console.log(res))
  }
  
}
