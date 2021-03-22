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
  

  baseUrlString: string = 'http://ip172-18-0-13-c1bngs0h550g00eq1rtg-8443.direct.labs.play-with-docker.com/';
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
  // updateColor = () => {
  //   var navbar = document.getElementsByClassName('navbar')[0];
  //   if (window.innerWidth < 993 && !this.isCollapsed) {
  //     navbar.classList.add('bg-white');
  //     navbar.classList.remove('navbar-transparent');
  //   } else {
  //     navbar.classList.remove('bg-white');
  //     navbar.classList.add('navbar-transparent');
  //   }
  // };
  
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
// window.addEventListener("resize", this.updateColor);
// this.listTitles = ROUTES.filter(listTitle => listTitle);
// const navbar: HTMLElement = this.element.nativeElement;
// this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
// this.router.events.subscribe(event => {
//   this.sidebarClose();
//   var $layer: any = document.getElementsByClassName("close-layer")[0];
//   if ($layer) {
//     $layer.remove();
//     this.mobile_menu_visible = 0;
//   }
// });
// }

// collapse() {
// this.isCollapsed = !this.isCollapsed;
// const navbar = document.getElementsByTagName("nav")[0];
// if (!this.isCollapsed) {
//   navbar.classList.remove("navbar-transparent");
//   navbar.classList.add("bg-white");
// } else {
//   navbar.classList.add("navbar-transparent");
//   navbar.classList.remove("bg-white");
// }
// }

// sidebarOpen() {
// const toggleButton = this.toggleButton;
// const mainPanel = <HTMLElement>(
//   document.getElementsByClassName("main-panel")[0]
// );
// const html = document.getElementsByTagName("html")[0];
// if (window.innerWidth < 991) {
//   mainPanel.style.position = "fixed";
// }

// setTimeout(function () {
//   toggleButton.classList.add("toggled");
// }, 500);

// html.classList.add("nav-open");

// this.sidebarVisible = true;
// }
// sidebarClose() {
// const html = document.getElementsByTagName("html")[0];
// this.toggleButton.classList.remove("toggled");
// const mainPanel = <HTMLElement>(
//   document.getElementsByClassName("main-panel")[0]
// );

// if (window.innerWidth < 991) {
//   setTimeout(function () {
//     mainPanel.style.position = "";
//   }, 500);
// }
// this.sidebarVisible = false;
// html.classList.remove("nav-open");
// }
// sidebarToggle() {
// // const toggleButton = this.toggleButton;
// // const html = document.getElementsByTagName('html')[0];
// var $toggle = document.getElementsByClassName("navbar-toggler")[0];

// if (this.sidebarVisible === false) {
//   this.sidebarOpen();
// } else {
//   this.sidebarClose();
// }
// const html = document.getElementsByTagName("html")[0];

// if (this.mobile_menu_visible == 1) {
//   // $('html').removeClass('nav-open');
//   html.classList.remove("nav-open");
//   if ($layer) {
//     $layer.remove();
//   }
//   setTimeout(function () {
//     $toggle.classList.remove("toggled");
//   }, 400);

//   this.mobile_menu_visible = 0;
// } else {
//   setTimeout(function () {
//     $toggle.classList.add("toggled");
//   }, 430);

//   var $layer = document.createElement("div");
//   $layer.setAttribute("class", "close-layer");

//   if (html.querySelectorAll(".main-panel")) {
//     document.getElementsByClassName("main-panel")[0].appendChild($layer);
//   } else if (html.classList.contains("off-canvas-sidebar")) {
//     document
//       .getElementsByClassName("wrapper-full-page")[0]
//       .appendChild($layer);
//   }

//   setTimeout(function () {
//     $layer.classList.add("visible");
//   }, 100);

//   $layer.onclick = function () {
//     //asign a function
//     html.classList.remove("nav-open");
//     this.mobile_menu_visible = 0;
//     $layer.classList.remove("visible");
//     setTimeout(function () {
//       $layer.remove();
//       $toggle.classList.remove("toggled");
//     }, 400);
//   }.bind(this);

//   html.classList.add("nav-open");
//   this.mobile_menu_visible = 1;
// }
// }

// getTitle() {
// var titlee = this.location.prepareExternalUrl(this.location.path());
// if (titlee.charAt(0) === "#") {
//   titlee = titlee.slice(1);
// }

// for (var item = 0; item < this.listTitles.length; item++) {
//   if (this.listTitles[item].path === titlee) {
//     return this.listTitles[item].title;
//   }
// }
// return "Dashboard";
// }

// open(content) {
// this.modalService.open(content, { windowClass: 'modal-search' }).result.then((result) => {
//   this.closeResult = `Closed with: ${result}`;
// }, (reason) => {
//   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
// });
// }

// private getDismissReason(reason: any): string {
// if (reason === ModalDismissReasons.ESC) {
//   return 'by pressing ESC';
// } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//   return 'by clicking on a backdrop';
// } else {
//   return `with: ${reason}`;
// }


}
//  

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