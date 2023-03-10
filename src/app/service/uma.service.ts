import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UmaService {
baseUrl:string='http://15.206.171.20:9090/'
  constructor(private http:HttpClient) { }

  loginPostMethod(body:any){
    return this.http.post(`${this.baseUrl}login`,body,{responseType:'text'})
  }
  getCountryMethod(){
    return this.http.get(`${this.baseUrl}countries`)
  }
  getStateMethod(countryId:number){
    return this.http.get(`${this.baseUrl}states/${countryId}`)
  }
  getCity(stateId:number){
    return this.http.get(`${this.baseUrl}cities/${stateId}`)
  }
  getEmail(email:any){
    return this.http.get(`${this.baseUrl}emailcheck/${email}`,{responseType:'text'})
  }
postSave(body:any){
  return this.http.post(`${this.baseUrl}saveUser`,body,{responseType:'text'})
}
postUnlock(body:any){
  return this.http.post(`${this.baseUrl}unlock`,body,{responseType:'text'})
}
getForget(mail:any){
  return this.http.get(`${this.baseUrl}forgotPwd/${mail}`,{responseType:'text'})
}
}
