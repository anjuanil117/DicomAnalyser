import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LogicService, Details } from 'src/app/logic.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { ThrowStmt } from "@angular/compiler";

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

  baseUrlString: string = 'http://ip172-18-0-47-c1ashpgh550g00ecerk0-8443.direct.labs.play-with-docker.com/';
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

    console.log("navbar calling");
    this.getAllFiles();
    this.getTime();

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
    console.log(this.time)
    
  }
  )
}

 

  searchvalue: any;
  selectedfile: any
  
  displayfile() {
    this.logic.data = [];
    let fromData:FormData = new FormData();  
        fromData.append('file', this.selectedfile)
    console.log(this.selectedfile)
    return this.http.post<Details>(this.baseUrlString +
      '/upload', fromData).subscribe((result) => 
     { 
       console.log(result.patientName)

      this.logic.data.push({
        "patientId": result.patientId,
        "patientName": result.patientName,
        "patientGender": result.patientGender,
        "patientBirthdate": result.patientBirthdate,
        "physicianName":result.physicianName,
        "studyDate": result.studyDate,
        "studyTime":result.studyTime,
        "pathology": result.studyDescription,
        "studyId":result.studyId,
       
        "modality": result.modality,
        "image": 'data:image/jpeg;base64,' + result.uploadImage
      })
    console.log("data" + this.logic.data)
    // }
      });

  }
  onselectedfile(event: any) {
    this.selectedfile = event.target.files[0];
  }
  selectedsearch: any;
  displaysearch() {
    
    this.logic.data = [];
    this.selectedsearch = <String>((<HTMLInputElement>document.getElementById("mySearch")).value)
    alert(this.selectedsearch)
    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", this.selectedsearch)
    console.log( studyParams)
    const options = this.selectedsearch ?
      { params: new HttpParams().set('keyword', this.selectedsearch) } : {};
    return this.http.get<Details>(this.baseUrlString +
      '/search', options)
      .subscribe((response) => {
        console.log("responce recieved", response);
        // console.log(response[0].patientName)
        // console.log(response[0].patientBirthdate)
        // console.log(response[0].patientGender)
        // console.log(response[0].studyDate)
        // console.log(response[0].studyTime)
        this.logic.data.push({
          "patientId": response[0].patientId,
          "patientName": response[0].patientName,
          "patientGender": response[0].patientGender,
          "patientBirthdate": response[0].patientBirthdate,
          "physicianName":response[0].physicianName,
          "studyDate": response[0].studyDate,
          "studyTime": response[0].studyTime,
          "pathology": response[0].studyDescription,
          "studyId": response[0].studyId,
          "modality": response[0].modality,
          "image": 'data:image/jpeg;base64,'+ response[0].uploadImage,
         
          
        })
        console.log(this.logic.data)
      }
      )
      
  }
 
}