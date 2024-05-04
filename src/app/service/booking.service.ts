import { Injectable } from '@angular/core';
import { Bookings } from '../bookings';
import { Booking } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings() : Bookings[] {
    return Booking;
  }

  deleteBooking(bookings: Bookings) {
    var indexOf = Booking.indexOf(bookings);
    Booking.splice(indexOf, 1);
  }
}
