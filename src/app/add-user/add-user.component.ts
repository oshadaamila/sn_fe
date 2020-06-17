import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  model = new User(0, "", "", "", "");
  valid = false;
  confirm_password = '' ;
  constructor() {
   }
  


  ngOnInit() {
  }

  submitted = false;
  
  onSubmit() {
    //TODO
  }

  diagnostic() { return JSON.stringify(this.model); }

  isUserValid() {
    if (this.model.type !== "Admin" ) {
      if (this.model.type !== "Data Enter") {
        return false;
      }
    }
    if (!this.isConfirmPasswordSame()) {
      return false;
    }
    
    return true;
  }

  isConfirmPasswordSame() {
    if (this.model.password === this.confirm_password) {
      return true;
    } else {
      return false;
    }
  }

  
  
}


