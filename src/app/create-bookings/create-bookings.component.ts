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
   var id = this.ActivatedRoute.snapshot.params['id'];
    if(id) {
      this.booking = Booking.find(booking => booking.id == id)!;
    }
  }

  onSubmit() {
    Booking.push(this.booking);
    this.route.navigate(['/bookings']);
  }

}
