import { Component } from '@angular/core';
import { Booking } from '../mock-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {

  bookings = Booking;

  constructor() {
   
  }


}
