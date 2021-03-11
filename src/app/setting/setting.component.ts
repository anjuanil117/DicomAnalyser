import { Component, OnInit } from '@angular/core';
import { Password } from '../components/password';
import { RestapiService } from '../restapi.service';
 import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  message:any;
   password:Password=new Password("","");

  constructor(public service:RestapiService,public router:Router) { }

  ngOnInit(): void {
  }

  public changeNow(){
    // this.router.navigate(["/login"])
    let resp=this.service.doChange(this.password);
    resp.subscribe((data)=>this.message=data);
    //this.router.navigate(["/login"])
  }
}
