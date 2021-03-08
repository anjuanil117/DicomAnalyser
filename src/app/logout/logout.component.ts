import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: RestapiService,
    private router: Router) {

     }

  ngOnInit(): void{
   // this.authentocationService.logOut();
    this.router.navigate(['login']);
  }
}


