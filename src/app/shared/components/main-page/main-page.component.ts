import { Component, OnInit } from '@angular/core';
import { Sight } from 'src/app/app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  sight: Sight[] = [
    {name: "Дворец искусств", latitude: "56.99997928491088", longitude: "40.9763512802509"},
    {name: "Место 2", latitude: "56.99917928491088", longitude: "40.9763512802509"},
    {name: "Еще одно место", latitude: "56.99999928991088", longitude: "40.9763512802509"},
  ]

  b = false;

  constructor() { }

  ngOnInit() {
  }

  public p1 = {
    iconContent: "1"
  }
  public p2 = {
    iconContent: "2"
  }
  public p3 = {
    iconContent: "3"
  }
  // public p4 = {
  //   iconContent: "4"
  // }

  bb(number) {
    console.log(this.b)
    this.b = !this.b;
  }

}
