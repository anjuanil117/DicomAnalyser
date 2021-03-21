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
  public names:any=[];
  patients:any=[];
  //public keys : any[] = [];
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
  baseUrlString: string = 'http://ip172-18-0-47-c1ashpgh550g00ecerk0-8443.direct.labs.play-with-docker.com/';
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
      '/All');//all
  }
 
  listpatient() {
    this.ListPatients().subscribe((res: any) => {
      console.log("Response:-", res);
      
        res.forEach(element => 
          {
          this.logic.patient.push({
            "name": element
           
            })
            
        }
        );
        // console.log("name");
        console.log("patient",this.logic.patient);

    })
  }


  displaydetails(name) {
    alert(name)
    this.logic.data = [];
    console.log("patient",this.logic.patient[0].name.patientName);
    this.logic.patientName=name;
    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", name)
    const options = name ?
      { params: new HttpParams().set('keyword', name) } : {};
    return this.http.get<Details>(this.baseUrlString +
      '/search', options)
      .subscribe((response) => {
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
          "image": 'data:image/jpeg;base64,{{image}}'+ response.uploadImage
        })
        console.log("data",this.logic.data)
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
