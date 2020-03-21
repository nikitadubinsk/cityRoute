import { Component } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";

export interface Sight {
  name?: string,
  description?: string,
  latitude?: string,
  longitude?: string,
  type?: string,
  features?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Путеводитель по городу';

  firebaseConfig = {
    apiKey: "AIzaSyAXejJG6v6XuUIFEICVOB2heP2nyTZVczE",
    authDomain: "cityroute-2be8a.firebaseapp.com",
    databaseURL: "https://cityroute-2be8a.firebaseio.com",
    projectId: "cityroute-2be8a",
    storageBucket: "cityroute-2be8a.appspot.com",
    messagingSenderId: "340419776997",
    appId: "1:340419776997:web:6512fea9d76640bdce1f0c"
  };

  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig); 
  }
}
