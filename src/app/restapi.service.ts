import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrlString: string = 'https://192.168.0.8/8443';

  constructor(private http:HttpClient) { }


  public login(username:string,password:string){
    const headers=new HttpHeaders({AUthorization:'Basic'+btoa(username+":"+password)})
    return this.http.get(this.baseUrlString +
      '/login',{headers,responseType:'text'as 'json'});
  }

  public doChange(password){
    return this.http.post(this.baseUrlString +
      '/setting',password,{responseType:'text'as 'json'})
  }


}
