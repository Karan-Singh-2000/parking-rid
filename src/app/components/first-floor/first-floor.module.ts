import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { DialogModule } from "primeng/dialog";
import { FirstFloorRoutingModule } from "./first-floor-routing.module";
import { FirstFloorComponent } from "./first-floor.component";
import { FirstFloorService } from "./first-floor.service";
import { SharedModule } from "../../modules/shared.module";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [FirstFloorComponent],
    imports: [
    CommonModule,
    FirstFloorRoutingModule,
    MatCardModule,
    MatGridListModule,
    DialogModule,
    SharedModule,
    ],
    providers: [FirstFloorService],
    exports: [FirstFloorRoutingModule,
        MatCardModule,
        MatGridListModule,
        DialogModule,
        SharedModule,
        CommonModule]
})
export class FirstFloorModule {}