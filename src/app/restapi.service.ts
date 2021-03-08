import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


  public login(username:string,password:string){
    const headers=new HttpHeaders({AUthorization:'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:8443/login",{headers,responseType:'text'as 'json'});
  }

  public doChange(password){
    return this.http.post('http://localhost:8443/setting',password,{responseType:'text'as 'json'})
  }


}
