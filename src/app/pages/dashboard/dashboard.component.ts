import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { LogicService } from 'src/app/logic.service';
import { NavbarComponent } from "src/app/components/navbar/navbar.component"
// import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
import { Subscription } from 'rxjs';
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
  // public dummydata = {
  //   patientId: '101',
  //   patientName: 'Anand',
  //   patientGender: 'Male',
  //   patientBirth:'13-03-1998',
  //   physician:"Dr.Vijay",
  //   studyDate:'10-01-2021',
  //   studyTime:'10.30 pm',
  //   Pathology:'Viral Fever',
  //   studyId:'101',
  //   Modality:'CT',
   




  // };
  private subscriptionData: Subscription;
  count:any;

  constructor(public logic: LogicService) { }

  ngOnInit() { }
  // public getDummyData() {

  //   this.logic.getdummudata().subscribe(
  //           (data)=>{
  //             this.count=data;
  //           });



    // this.subscriptionData = this.logic.getdummudata().subscribe(
    //   (response) => {
    //     console.log('response',response);

    //   },
    //   (error) => {

    //   },
    // );
  }


