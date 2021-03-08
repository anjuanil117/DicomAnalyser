import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Details{
  constructor(
    public name:string,
    public patientid:string,
    public pathology:string,
    public studydate:string,
    public birthdate:string,
    public age:string,
    public sex:string,
    public modality:string,
    public image:any,
   



  ) {}
}

// export interface LoginTime{
  
// }
@Injectable({
  providedIn: 'root'
})
export class LogicService {
  name:any;
  patientname:any;
  patient:any=[];
  data:any=[];
  

  constructor(private http:HttpClient) { }
  getusercount(){
    return this.http.get<LogicService[]>('http://localhost:8443/count');
  }
  getlogintime(){
    return this.http.get<LogicService[]>('http://localhost:8443/logintime');
  }
  
}
