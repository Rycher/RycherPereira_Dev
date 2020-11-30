import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasAPagarComponent } from './contas-apagar/contas-apagar.component';
import { ContasService} from './contas.service';
import {HttpClientModule} from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule }   from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ContasAPagarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    AgGridModule.withComponents([]),
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule       
  ],
  providers: [ContasService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
