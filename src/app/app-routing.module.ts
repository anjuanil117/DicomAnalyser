import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SettingComponent } from "./setting/setting.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path:'login',component:LoginComponent,
   
  },
  {path:'logout',component:LogoutComponent},
  {path:'password',component:SettingComponent},
  {
    path: "dashboard",
    redirectTo: "dashboard",
    //  pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },
   {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  // {
  //   path: "**",
  //   redirectTo: "dashboard"
  // },
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent
  //     }
  //   ]
  // }
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
