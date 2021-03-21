import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions, JsonpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
export class Details {
  constructor(
    public patientId: string,
    public patientName: string,
    public patientGender: string,
    public patientBirthdate: string,
    public physicianName: string,
    public studyDate: string,
    public studyTime: string,
    public studyId: string,
    public studyDescription: string,
    public modality: string,
    public uploadTime: any,
    public uploadImage: any,
    // private http: Http,




  ) { }
}

// export interface LoginTime{

// }
@Injectable({
  providedIn: 'root'
})
export class LogicService {
  keyword: any;
  names:any= [];
  patientName: any;
  patient: any = [];
  data: any = [];
  searchdata: any=[];

  //baseUrlString: string = 'https://jsonplaceholder.typicode.com/';
  baseUrlString: string = 'http://ip172-18-0-47-c1ashpgh550g00ecerk0-8443.direct.labs.play-with-docker.com/';

  constructor(private http: HttpClient) { }
  
  // getdummudata() {
  //   return this.http.get(this.baseUrlString +
  //     '/users').
  //     pipe(map((res: Response) => res.json()),
  //       catchError(<T>(error: any, result?: T) => {
  //         return of(result as T);
  //       })
  //     );
  // }
  getAvailablefiles(){

    return this.http.get(this.baseUrlString+'/count')
  }
  getCurrentTime(){

    return this.http.get(this.baseUrlString+'/lastlogintime')
  }

}
