import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-ground-floor',
  templateUrl: './ground-floor.component.html',
  styleUrls: ['./ground-floor.component.scss']
})
export class GroundFloorComponent implements OnInit {

  slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  isShow = false;
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  onReserve() {
    this.isShow = true;
    console.log("string on reserve");
}

}
