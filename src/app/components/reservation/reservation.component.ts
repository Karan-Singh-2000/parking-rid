import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { 
    console.log('under reservation');
  }

  ngOnInit(): void {

  }

}
