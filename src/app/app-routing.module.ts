import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacsystemComponent } from './bacsystem/bacsystem.component';
import { AngularComponent } from './angular/angular.component';
import { NginxComponent } from './nginx/nginx.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: '', component: PortalComponent, children: [
      {
        path: 'angular', component: AngularComponent
      },
      {
        path: 'nginx', component: NginxComponent
      },
      {
        path: 'bacsystem', component: BacsystemComponent
      },
      {
        path: '', redirectTo: '/bacsystem', pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
