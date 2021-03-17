import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import{NgForm} from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any
  user=new User();
  myDate=Date.now();
  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {

    this.service.login(this.user).subscribe(
      data=>console.log("response received"),
      err=>console.log("exception")
    )
    this.router.navigate(["/dashboard"])


    // this.router.navigate(["/dashboard"])
    // let resp = this.service.login(user);
    // resp.subscribe(data => {
    //   console.log(data)
    // //   this.message = data;
     
    //  this.router.navigate(["/dashboard"])
    
  
      // this.router.navigate(["/dashboard"],
    //console.log(this.loginUserData)
  }
}