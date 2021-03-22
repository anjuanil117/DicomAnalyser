import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrlString: string = 'http://ip172-18-0-13-c1bngs0h550g00eq1rtg-8443.direct.labs.play-with-docker.com/';

  constructor(private http:HttpClient) { }

    public login(username,password):Observable<any>{
      
      console.log("username",username)
      let formData: FormData = new FormData(); 
    formData.append('username', username); 
    formData.append('password', password); 
    return this.http.post<any>(this.baseUrlString +'/login',formData);

    // // console.log("he");
    // const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+":"+password)})
    // return this.http.post<any>(this.baseUrlString +
    //   '/login',user);
     
  }

  public doChange(oldPass,newPass):Observable<any>{
    console.log("oldPass",oldPass)
    let formData: FormData = new FormData(); 
    formData.append('oldPass', oldPass); 
    formData.append('newPass', newPass); 
    return this.http.post(this.baseUrlString +
      '/settings',formData)
  }


}
