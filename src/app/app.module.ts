import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/shared/navbar/navbar.module'
import { FooterModule } from './components/shared/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AuthenticationFormComponent } from './components/authentications/authentication-form/authentication-form.component';

import {AuthInterceptor} from "./utils/authInterceptor"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthenticationFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to imports
    ReactiveFormsModule, // Add ReactiveFormsModule to imports
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



