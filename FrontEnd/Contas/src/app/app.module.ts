import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasAPagarComponent } from './contas-apagar/contas-apagar.component';
import { ContasService} from './contas.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ContasAPagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContasService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
