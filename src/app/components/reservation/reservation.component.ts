import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from './reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router) { 
    console.log('under reservation');
  }

  ngOnInit(): void {

  }

  ground() {
    console.log('ground');
    this.router.navigate(['/g1/ground']);
  }

  first() {
    console.log('first');
    this.router.navigate(['/f1/first']);
  }

}
