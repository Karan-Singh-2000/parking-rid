import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { DialogModule } from "primeng/dialog";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
    declarations: [],
    imports: [
    MatCardModule,
    MatGridListModule,
    DialogModule,
    ConfirmDialogModule],
    providers: [ConfirmationService],
    exports: [
        MatCardModule,
        MatGridListModule,
        DialogModule,
        ConfirmDialogModule]
})
export class SharedModule {}
