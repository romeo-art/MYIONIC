import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postdata = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  validateLoginData(){
    let username = this.postdata.username.trim();
    let password = this.postdata.password.trim();

    return(
      this.postdata.username && 
      this.postdata.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  
}
