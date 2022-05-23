import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'structure-restaurent';
  
  routes = [
    { linkName: 'admin', url: 'admin' },
    { linkName: 'user', url: 'user' },
  ];

  
}
