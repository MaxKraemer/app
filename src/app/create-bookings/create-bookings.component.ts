import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bookings } from '../bookings';
import { Booking } from '../mock-data';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-create-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-bookings.component.html',
  styleUrl: './create-bookings.component.scss'
})
export class CreateBookingsComponent {

  constructor(private route: Router, private ActivatedRoute: ActivatedRoute) { }

  booking: Bookings = {
    id: 6,
    name: 'Max Kraemer',
    email: 'maximilian.kraemer@gmx.de',
    startDate: new Date(),
    endDate: new Date(),
    roomNumber: 120
  };

  ngOnInit() {
    if (this.route.url != '/create-bookings') {
      var id = this.ActivatedRoute.snapshot.params['id'];
      var bookingId = Booking.find(booking => booking.id == id)!;
      this.booking = bookingId;
    }
  }

  onSubmit() {
   var bookingId = Booking.find(booking => booking.id == this.booking.id);

   if(bookingId == null || bookingId == undefined) {
     Booking.push(this.booking);
   } else {
     bookingId = this.booking;
   }
   
    this.route.navigate(['/bookings']);
  }
}
