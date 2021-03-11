import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any
  myDate=Date.now();
  constructor(public service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    // this.router.navigate(["/dashboard"])
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
     this.router.navigate(["/dashboard"])
    });
  }
}