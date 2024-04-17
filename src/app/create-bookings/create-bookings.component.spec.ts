import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingsComponent } from './create-bookings.component';

describe('CreateBookingsComponent', () => {
  let component: CreateBookingsComponent;
  let fixture: ComponentFixture<CreateBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
