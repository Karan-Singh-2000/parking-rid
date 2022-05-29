import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReservationComponent } from "./components/reservation/reservation.component";

const routes: Routes = [
    { path: '', component: ReservationComponent},
    { 
        path: 'f1', 
        loadChildren: () => import(`./components/first-floor/first-floor.module`).then(
          module => module.FirstFloorModule
        )
    }    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
