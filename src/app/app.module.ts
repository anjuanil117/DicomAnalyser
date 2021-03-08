import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from "./login/login.component";
import { SettingComponent } from "./setting/setting.component";
import { LogicService } from "./logic.service";
import { RestapiService } from "./restapi.service";
import { LogoutComponent } from './logout/logout.component';
//import{ConfirmEqualValidatorDirective} from './confirm-equal-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, LoginComponent,AdminLayoutComponent, AuthLayoutComponent,SettingComponent, LogoutComponent],
  providers: [LogicService,RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
