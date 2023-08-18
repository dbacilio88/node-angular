import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacsystemComponent } from './bacsystem/bacsystem.component';
import { AngularComponent } from './angular/angular.component';
import { NginxComponent } from './nginx/nginx.component';
import { PortalComponent } from './portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    BacsystemComponent,
    AngularComponent,
    NginxComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
