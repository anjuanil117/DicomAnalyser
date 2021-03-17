import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  baseUrlString: string = 'http://2886795323-8443-elsy05.environments.katacoda.com/';

  constructor(private http:HttpClient) { }

    public  login(user:User):Observable<any>{
      return this.http.post<any>(this.baseUrlString +'/login',user);

    // // console.log("he");
    // const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+":"+password)})
    // return this.http.post<any>(this.baseUrlString +
    //   '/login',user);
     
  }

  public doChange(password){
    return this.http.post(this.baseUrlString +
      '/setting',password,{responseType:'text'as 'json'})
  }


}
