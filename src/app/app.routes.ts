import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingsComponent } from './create-bookings/create-bookings.component';

export const routes: Routes = [
    {path: '', redirectTo: '/bookings', pathMatch: 'full'},
    {path: 'bookings', component: BookingsComponent},
    {path: 'create', component: CreateBookingsComponent},
    {path: 'edit/:id', component: CreateBookingsComponent}

];
