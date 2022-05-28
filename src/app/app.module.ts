import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
// import { ReservedComponent } from './components/reserved/reserved.component';
import { ReservationComponent } from './components/reservation/reservation.component';
// import { ReservedModule } from './components/reserved/reserved.module';
import{MatCardModule} from '@angular/material/card';
import { GroundFloorComponent } from './components/ground-floor/ground-floor.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstFloorComponent } from './first-floor/first-floor.component';

@NgModule({
  declarations: [
    AppComponent,
    // ReservedComponent,
    ReservationComponent,
    GroundFloorComponent,
    FirstFloorComponent,
    // Freecomponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule
    // ReservedModule
  ],
  providers: [AppService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
