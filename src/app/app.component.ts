import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public toShow = false;

  public appPages = [
    {
      title: 'Home',
      url: '/folder/Home',
      // icon: 'Home'
    },
    {
      title: 'Events',
      url: '/folder/Events',
      // icon: 'calendar'
    },
    {
      title: 'Training',
      url: '/folder/Training',
      // icon: 'teaching'
    },
    {
      title: 'Services',
      url: '/folder/Services',
      // icon: 'archive'
    },
    {
      title: 'News',
      url: '/folder/News',
      // icon: 'trash'
    },
    {
      title: 'iSearch',
      url: '/i-search',
      // icon: 'warning'
    },
    {
      title: 'Membership',
      url: '/folder/Membership',
      // icon: 'warning'
    },
    {
      title: 'About us',
      url: '/folder/About us',
      // icon: 'warning'
    },
    {
      title: 'Careers',
      url: '/folder/Careers',
      // icon: 'warning'
    },
    {
      title: 'Gallery',
      url: '/folder/Gallery',
      // icon: 'warning'
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // console.log("Selected Index: " + this.selectedIndex)
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    console.log("Path: " + path)
      console.log("Selected Index: " + this.selectedIndex)
  }

  showISearchChild(){
    if(this.appPages[this.selectedIndex].title === 'iSearch'){
      console.log("yes ISearch")
    }
    else{
      console.log("not iSearch")
    }
  }

  showSample(){
    console.log("HOOOOOOOIIIIIII!!!!!!!!!!!!!!!")
    this.toShow = true;
  }

}
