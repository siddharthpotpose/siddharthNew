import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {

  constructor(private unlockObj:UmaService){}
 
  unlockForm=new FormGroup({
    confirmPwd:new FormControl(''),
    email:new FormControl(''),
    newPwd: new FormControl(''),
    tempPwd: new FormControl('')

  })
  unlock(){
    this.unlockObj.postUnlock(this.unlockForm.value).subscribe(res=>console.log(res))
  }
  
}
