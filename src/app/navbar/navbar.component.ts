import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shows: boolean;
  isShown: boolean;
  constructor(
    
  ) { }

  ngOnInit() {
    this.isShown = false;
  }

  onMenuItemClick() {
    if (this.isShown) {
      this.shows = false;
      this.isShown = false;
    } else {
      this.shows = true;
      this.isShown = true;
    }
  }

  onToggleItemClick() {
    this.isShown = !this.isShown;
    this.shows = null;
  }

}
