import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindNumberComponent } from './find-number/find-number.component';
import { PhoneComponent } from './phone/phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FourthComponent } from './fourth/fourth.component';  

@NgModule({
  declarations: [
    AppComponent,
    FindNumberComponent,
    PhoneComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
