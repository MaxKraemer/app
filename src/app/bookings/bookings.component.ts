import { Component } from '@angular/core';
import { Booking } from '../mock-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Bookings } from '../bookings';
import { BookingService } from '../service/booking.service';


@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {

  booking : Bookings[] = [];

  constructor(private bookingService: BookingService) { }


ngOnInit() {
  this.booking = this.bookingService.getBookings();
}

deleteBooking(bookings: Bookings) {
  this.bookingService.deleteBooking(bookings);  
}


}
