import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule  } from './modules/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [AppService, ConfirmationService],
  bootstrap: [AppComponent],
  entryComponents: [ReservationComponent],
  exports: [SharedModule]
})
export class AppModule { }
