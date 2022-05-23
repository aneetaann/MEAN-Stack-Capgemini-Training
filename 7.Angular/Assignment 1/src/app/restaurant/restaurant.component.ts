import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  CreateRestaurent: string = 'Enter Restaurent';
  restaurentList = Array();
  promenu = '';
  successful_booking_msg = 'You have successfully booked the restaurent';

  constructor() {}

  ngOnInit(): void {}
  onclick(promenu: { value: any }) {
    if (promenu.value.length > 0) {
      this.restaurentList.push(promenu.value);
      promenu.value = '';
    }
  }

  onDelete(del: number) {
    this.restaurentList.splice(del, 1);
  }

  bookres() {
    this.successful_booking_msg;
  }
  handleClick(event: any) {
    if (event.view.getSelection().type !== 'Range') {
      alert('You have booked succesfully');
    }
  }
}
