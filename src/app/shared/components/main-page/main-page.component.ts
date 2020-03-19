import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public placemarkOptions = {
    // iconLayout: 'default#image',
    iconContent: '1',
    iconImageSize: [32, 32]
  };

}
