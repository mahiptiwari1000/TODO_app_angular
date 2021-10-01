import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule,routingComponent} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
