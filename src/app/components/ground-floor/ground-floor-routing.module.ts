import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroundFloorComponent } from "./ground-floor.component";

const routes: Routes = [
    { path: '', redirectTo: 'ground', pathMatch: 'full'},
    { path: 'ground', component: GroundFloorComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroundFloorRoutingModule {}
