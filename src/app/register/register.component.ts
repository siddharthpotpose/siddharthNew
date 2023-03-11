import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmaService } from '../service/uma.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private obj:UmaService){this.getCountryData()}

  OnInit():void{this.saveData()}

  RegistrationForm = new FormGroup({
    cityId:new FormControl(''),
    countryId: new FormControl(''),
    dob:new FormControl(''), 
    email: new FormControl('',[Validators.required,Validators.email]),
    fname: new FormControl('',[Validators.required]),
    gender: new FormControl(''),
    lname: new FormControl('',[Validators.required]),
    phno:new FormControl(' ',
    [Validators.required,Validators.pattern('[0-9]*'),
    Validators.minLength(10),
    Validators.maxLength(10)
  ]), 
    stateId:new FormControl('')
  })
 
   saveData(){
    this.obj.postSave(this.RegistrationForm.value).subscribe(res=>console.log(res))
   }
   country:any;
   getCountryData(){
    this.obj.getCountryMethod().subscribe(res=>this.country=res)
   }
   state:any;
   getStateData(countryId:number){
    this.obj.getStateMethod(countryId).subscribe(res=>this.state=res)
   }
   city:any;
   getCityData(stateId:number){
    this.obj.getCity(stateId).subscribe(res=>this.city=res)
   }
   email:any;
   getEmailData(email:any){
    this.obj.getEmail(email).subscribe(res=>this.email=res)
   }



}
