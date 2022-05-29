import { NgModule } from "@angular/core";
import { AppModule } from "src/app/app.module";
// import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "src/app/modules/shared.module";
import { ReservationRoutingModule } from "./reservation-routing.module";
import { ReservationComponent } from "./reservation.component";
import { ReservationService } from "./reservation.service";

@NgModule({
    declarations: [ReservationComponent],
    imports: [ReservationRoutingModule,
        SharedModule, AppModule],
    providers: [ReservationService],
    exports: [ReservationRoutingModule, SharedModule, AppModule]
})
export class ReservationModule {}
