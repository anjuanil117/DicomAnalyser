import { Component, OnInit } from '@angular/core';
// import { Password } from 
import { RestapiService } from '../restapi.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Pass } from '../pass';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  message:any;
  // password:Password=new Password();
  oldPassword:String;
  newPassword:String;
  conformPassword:String;
  pass=new Pass();

  constructor(public service:RestapiService,public router:Router) { }

  ngOnInit(): void {
  }

  public changeNow(){
    // this.router.navigate(["/login"])

    // console.log(this.pass.oldPass)
    this.service.doChange(this.pass.oldPass,this.pass.newPass).subscribe(
      
      data=>{
        console.log(data.message)},
      err=>console.log("exception")
      )

    // let resp=this.service.doChange(this.password);
    // console.log("value",resp)
    // resp.subscribe((data)=>this.message=data);
    // console.log(this.message)
  }
}
