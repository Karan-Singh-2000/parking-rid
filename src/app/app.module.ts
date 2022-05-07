import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ReservedComponent } from './components/reserved/reserved.component';
// import { ReservedModule } from './components/reserved/reserved.module';

@NgModule({
  declarations: [
    AppComponent,
    ReservedComponent,
    // Freecomponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // ReservedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
