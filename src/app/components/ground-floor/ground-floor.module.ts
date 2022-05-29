import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { DialogModule } from "primeng/dialog";
import { GroundFloorRoutingModule } from "./ground-floor-routing.module";
import { GroundFloorComponent } from "./ground-floor.component";
import { GroundFloorService } from "./ground-floor.service";
import { SharedModule } from "../../modules/shared.module";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [GroundFloorComponent],
    imports: [
    CommonModule,
    GroundFloorRoutingModule,
    MatCardModule,
    MatGridListModule,
    DialogModule,
    SharedModule,
    ],
    providers: [GroundFloorService],
    exports: [GroundFloorRoutingModule,
        MatCardModule,
        MatGridListModule,
        DialogModule,
        SharedModule,
        CommonModule]
})
export class GroundFloorModule {}