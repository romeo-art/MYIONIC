import { Component, OnInit } from '@angular/core';
// import { User } from 'models/user_Model';
import { AppServiceService } from '../app-service.service';
import User from '../model/userModel';

@Component({
  selector: 'app-not-login-i-search',
  templateUrl: './not-login-i-search.page.html',
  styleUrls: ['./not-login-i-search.page.scss'],
})
export class NotLoginISearchPage implements OnInit {
  // myuser: User[] = [];

  username;
  firstname;
  lastname;
  email;
  password;
  confirm_password;
  isMember;
  organization;
  sector;
  address;
  contact_number;
  email_alerts;
  sms_alerts;

  constructor(private appService: AppServiceService) { }


  ngOnInit() {
    // this.appService.get_user('user').subscribe((userl: User[]) => this.myuser = userl);
  }


  onSubmit() {
    let sampleUser = new User;
    sampleUser.username = this.username;
    sampleUser.firstname = this.firstname;
    sampleUser.lastname = this.lastname;
    sampleUser.email = this.email;
    sampleUser.password = this.password;
    sampleUser.isMember = this.isMember;
    sampleUser.organization = this.organization;
    sampleUser.sector = this.sector;
    sampleUser.address = this.address;
    sampleUser.contact_number = this.contact_number;
    sampleUser.email_alerts = this.email_alerts;
    sampleUser.sms_alerts = this.sms_alerts;

    console.log("User: " + JSON.stringify(sampleUser))

    console.log("Email alerts: " + sampleUser.email_alerts);
    console.log("Sms Alerts: " + sampleUser.sms_alerts)
    // this.appService.create_user('create_user', sampleUser).subscribe( 
    //   res => {
    //     console.log(res);
    //   }
    // )

    if (this.password === this.confirm_password) {
      this.appService.create_user('create_user', sampleUser)
        .subscribe(res => {
          console.log("Saved data: " + JSON.stringify(res))
        })
    }else{
      alert("Your password did not matched!")
    }
    // this.create_user;
  }

  // create_user(){
  //   this.appService.create_user("New User").subscribe((response: any)=>{
  //     console.log("This is the response: " + response)
  //   })
  // }
}