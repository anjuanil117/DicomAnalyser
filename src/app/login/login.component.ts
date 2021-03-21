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
  data:{
    username:" ",
    password:" "
  }
  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {

    console.log(this.user.username)
    
    this.service.login(this.user.username,this.user.password).subscribe(
      
    data=>{
      if((data.status)==200)
      {
        console.log("hi")
        this.router.navigate(["/dashboard"])
      }
      else{
        alert("invalid credentials")
      }
    }
    ,
    err=>console.log("exception")
    )
   
    // this.router.navigate(["/dashboard"])


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