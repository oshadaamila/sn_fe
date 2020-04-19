import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  user = new User(1,"user", "admin");

  ngOnInit() {
  }

  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }

}
