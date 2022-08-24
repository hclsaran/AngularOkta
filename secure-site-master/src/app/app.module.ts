import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectRoutingModule } from './project/project-routing.module';
import { ProjectModule } from './project/project.module';
import { AuthGuard } from './authenticate/auth.guard';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authenticate/login.component';
import { OktaService } from './authenticate/okta.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    ProjectModule,
    AppRoutingModule
  ],
  providers: [
    OktaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
