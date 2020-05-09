import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  model= new User(0,"","","","","");
  constructor() {
   }
  


  ngOnInit() {
  }

  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}


