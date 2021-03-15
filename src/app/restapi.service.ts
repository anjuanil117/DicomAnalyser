import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrlString: string = 'http://ip172-18-0-13-c17n3gpbqvp00094ma60-8443.direct.labs.play-with-docker.com/';

  constructor(private http:HttpClient) { }


  public  login(user){
    //const headers=new HttpHeaders({AUthorization:'Basic'+btoa(username+":"+password)})
    return this.http.post(this.baseUrlString +
      '/login',user);
  }

  public doChange(password){
    return this.http.post(this.baseUrlString +
      '/setting',password,{responseType:'text'as 'json'})
  }


}
