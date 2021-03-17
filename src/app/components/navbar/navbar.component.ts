import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LogicService, Details } from 'src/app/logic.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})




export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  count:any;
  time:any;
  todayDate : Date = new Date();
 

  

  public isCollapsed = true;

  closeResult: string;

  baseUrlString: string = 'http://2886795323-8443-elsy05.environments.katacoda.com/';
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private modalService: NgbModal,
    private logic: LogicService,
    private http: HttpClient
  ) {
    this.location = location;
    this.sidebarVisible = false;
  }
  
   ngOnInit()   {

 // this.logic.getAvailablefiles().subscribe(
      //         (data)=>{
      //          this.count=data;
      //         });

    
// 

//    this.logic.getlogintime().subscribe(
//         (val)=>{
//           this.count=val;
//         });

 }
 getAllFiles(){
   this.logic.getAvailablefiles().subscribe((data)=>
   {
     this.count=data;
     console.log(this.count)
     
   })
 }
 getTime(){
  this.logic.getCurrentTime().subscribe((data)=>
  {
    this.time=data;
    
  }
  )
}

 

  searchvalue: any;
  selectedfile: any
  
  displayfile() {
    this.logic.data = [];
    let fromData = new FormData();
    fromData.append('file', this.selectedfile)
    console.log(this.selectedfile)
    return this.http.post<Details>(this.baseUrlString +
      '/upload', fromData).subscribe((result) => {

      this.logic.data.push({
        "patientid": result.patientid,
        "name": result.name,
        "sex": result.sex,
        "birthdate": result.birthdate,
        "physician":result.physician,
        "studydate": result.studydate,
        "studytime":result.studytime,
        "pathology": result.pathology,
        "studyid":result.studyid,
       
        "modality": result.modality,
        "image": 'data:image/jpeg;base64,' + result.image
      })
      console.log("data" + this.logic.data)
    });

  }
  onselectedfile(event: any) {
    this.selectedfile = event.target.files[0];
  }
  selectedsearch: any;
  displaysearch() {

    this.logic.data = [];
    this.selectedsearch = <String>((<HTMLInputElement>document.getElementById("mySearch")).value)
    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", this.selectedsearch)
    const options = this.selectedsearch ?
      { params: new HttpParams().set('name', this.selectedsearch) } : {};
    return this.http.get<Details>(this.baseUrlString +
      '/search', options)
      .subscribe((response) => {
        console.log("responce recieved", response)
        this.logic.data.push({
          "patientid": response.patientid,
          "name": response.name,
          "sex": response.sex,
          "birthdate": response.birthdate,
          "physician":response.physician,
          "studydate": response.studydate,
          "studytime": response.studytime,
          "pathology": response.pathology,
          "studyid": response.studyid,
          "modality": response.modality,
          "image": 'data:image/jpeg;base64,'+ response.image
        })
        console.log("data" + this.logic.data)
      }
      )
      
  }
 
}