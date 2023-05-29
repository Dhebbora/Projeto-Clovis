import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HeaderComponent } from './header/header.component';
import { FormNotasComponent } from './form-notas/form-notas.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { AccountComponent } from './domain/pages/account/account.component';
import { BaseAppComponent } from './base-app/base-app.component';
import { SharedModule } from './shared/shared.module';
import { FormConfigComponent } from './form-notas/form-config/form-config/form-config.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HeaderComponent,
    FormNotasComponent,
    AccountComponent,
    BaseAppComponent,
    FormConfigComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
