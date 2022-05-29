import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstFloorComponent } from "./first-floor.component";

const routes: Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full'},
    { path: 'first', component: FirstFloorComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FirstFloorRoutingModule {}
