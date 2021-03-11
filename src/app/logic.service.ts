import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions, JsonpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
export class Details {
  constructor(
    public patientid: string,
    public name: string,
    public sex: string,
    public birthdate: string,
    public physician: string,
    public studydate: string,
    public studytime: string,
    public studyid: string,
    public pathology: string,
    public modality: string,
    public image: any,
    // private http: Http,




  ) { }
}

// export interface LoginTime{

// }
@Injectable({
  providedIn: 'root'
})
export class LogicService {
  name: any;
  patientname: any;
  patient: any = [];
  data: any = [];

  //baseUrlString: string = 'https://jsonplaceholder.typicode.com/';
  baseUrlString: string = 'https://192.168.0.8/8443';

  constructor(private http: HttpClient) { }
  
  getdummudata() {
    return this.http.get(this.baseUrlString +
      '/users').
      pipe(map((res: Response) => res.json()),
        catchError(<T>(error: any, result?: T) => {
          return of(result as T);
        })
      );
  }
  getAvailablefiles(){

    return this.http.get(this.baseUrlString+'/counts')
  }
  getCurrentTime(){

    return this.http.get(this.baseUrlString+'/lastlogintime')
  }

}
