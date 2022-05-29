import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { GroundFloorService } from './ground-floor.service';

@Component({
  selector: 'app-ground-floor',
  templateUrl: './ground-floor.component.html',
  styleUrls: ['./ground-floor.component.scss']
})
export class GroundFloorComponent implements OnInit {
  firstFloorAvailable: any;
  slots: any;
  display = false;
  name: any;
  vehicle_no: string | undefined;

  constructor(private firstFloorService : GroundFloorService, private confirmationService: ConfirmationService) {
    this.firstFloorService.getFirstFloor().subscribe(x => {
      this.slots = x.map((y: any) => y.available);
    })
   }

  ngOnInit(): void {
    console.log('inside init');
    console.log(this.slots);
  }

  onReserve(index : number) {
    console.log(index);
    this.display = true;
  }

  reserveDone() {
    this.display = false;
    console.log(this.name);
    console.log(this.vehicle_no);
  }

  keyup(value: string) {
    this.name = value;
  }

  keyupVehicle(value: string) {
    this.vehicle_no = value;
  }

  onExit(index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to exit out?',
      accept: () => {
         index = index + 1;
         this.firstFloorService.updateExit(index);
        console.log(index);
      }
    });
  }

}
