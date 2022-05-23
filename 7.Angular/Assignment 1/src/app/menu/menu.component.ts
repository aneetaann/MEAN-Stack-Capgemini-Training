import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  CreateMenu: string = 'Enter Menu';
  //menuList = [];
  menuList = Array();
  constructor() {}

  ngOnInit(): void {}

  onclick(promenu: { value: any }) {
    if (promenu.value.length > 0) {
      this.menuList.push(promenu.value);
      promenu.value = '';
    }
  }

  onDelete(del: number) {
    this.menuList.splice(del, 1);
  }
}
