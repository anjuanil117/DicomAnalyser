import { Component, OnInit } from "@angular/core";
import { LogicService, Details } from 'src/app/logic.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
// import { HttpClientService } from "src/app/service/http-client.service";

declare interface RouteInfo {
  path: string;
  title: string;



}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard"



  }
];


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  names:any=[];
  patients:any=[];
  // public data = [
  //   {
  //   id: '101',
  //   Name: 'Anand',
  //   },
  //   {
  //     id:102,
  //     Name:'Anju'
  //   },
  //   {
  //     id:102,
  //     Name:'Anju'
  //   },
  //   {
  //     id:102,
  //     Name:'Anju'
  //   },
  //   {
  //     id:102,
  //     Name:'Anju'
  //   },
   
  
  
  // ];
  baseUrlString: string = 'http://ip172-18-0-13-c17n3gpbqvp00094ma60-8443.direct.labs.play-with-docker.com/';
  constructor(public logic: LogicService,
    private http: HttpClient) { }

  ngOnInit() {
   // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.patient();
    console.log('Calling');
    //this.listusers();
    this.listpatient();
  }


  ListPatients() {
    return this.http.get(this.baseUrlString +
      '/all');//all
  }
 
  listpatient() {
    this.ListPatients().subscribe((res: any) => {
      console.log("Response:-", res);
        res.names.forEach(element => {
          this.logic.patient.push({
            "name": element
            })
        });
        console.log(this.logic.patient);

    })
  }



  displaydetails(name) {
    this.logic.data = [];
    console.log(name)
    this.logic.patientname=name;
    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", name)
    const options = name ?
      { params: new HttpParams().set('name', name) } : {};
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





























// import { Component, OnInit } from "@angular/core";

// declare interface RouteInfo {
//   path: string;
//   title: string;
//   rtlTitle: string;
//   icon: string;
//   class: string;
// }
// export const ROUTES: RouteInfo[] = [
//   {
//     path: "/dashboard",
//     title:"Anju",
//     rtlTitle: "لوحة القيادة",
//     icon: " ",
//     class: ""
//   },
//   {
//     path: "/icons",
//     title: "Anand",
//     rtlTitle: "الرموز",
//     icon: " ",
//     class: ""
//   },
//   {
//     path: "/maps",
//     title: "Annie",
//     rtlTitle: "خرائط",
//     icon: " ",
//     class: "" },
//   {
//     path: "/notifications",
//     title: "Irsha",
//     rtlTitle: "إخطارات",
//     icon: " ",
//     class: ""
//   },

//   {
//     path: "/user",
//     title: "Jisna",
//     rtlTitle: "ملف تعريفي للمستخدم",
//     icon: " ",
//     class: ""
//   },
//   {
//     path: "/tables",
//     title: "Nithin",
//     rtlTitle: "قائمة الجدول",
//     icon: "",
//     class: ""
//   },
//   {
//     path: "/typography",
//     title: "Vishnu",
//     rtlTitle: "طباعة",
//     icon: "",
//     class: ""
//   },
//   {
//     path: "/rtl",
//     title: "Remya",
//     rtlTitle: "ار تي ال",
//     icon: "",
//     class: ""
//   }
// ];

// @Component({
//   selector: "app-sidebar",
//   templateUrl: "./sidebar.component.html",
//   styleUrls: ["./sidebar.component.css"]
// })
// export class SidebarComponent implements OnInit {
//   menuItems: any[];

//   constructor() {}

//   ngOnInit() {
//     this.menuItems = ROUTES.filter(menuItem => menuItem);
//   }
//   isMobileMenu() {
//     if (window.innerWidth > 991) {
//       return false;
//     }
//     return true;
//   }
// }
