import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sight } from 'src/app/app.component';
import { Subject } from 'rxjs';
import { SightService } from '../../service/sight.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  walkInTheCenterFlag = true;
  museumWalkFlag = false;
  walkInTheParksFlag = false;
  form : FormGroup;
  routeSelected = false;
  allSight = [];
  sight: Sight[] = []
  sights: Sight[] = []
  sightForMap: Sight[] = []
  time = [];
  duration;
  allDuration;
  i = 0;
  j = 0;
  random = -1;
  park: Sight[] = [];
  museum: Sight[] = [];
  rand = true;
  parkLength = [];


  cl1; cl2; sl1; sl2; delta; cdelta; sdelta; y; x; ad;

  calculateTheDistance(lat1, long1, lat2, long2) {
    this.cl1 = Math.cos(lat1*Math.PI/180);
    this.cl2 = Math.cos(lat2*Math.PI/180);
    this.sl1 = Math.sin(lat1*Math.PI/180);
    this.sl2 = Math.sin(lat2*Math.PI/180);
    this.delta = long2*Math.PI/180 - long1*Math.PI/180;
    this.cdelta = Math.cos(this.delta);
    this.sdelta = Math.sin(this.delta); 

    this.y = Math.sqrt(Math.pow(this.cl2 * this.sdelta, 2) + Math.pow(this.cl1 * this.sl2 - this.sl1 * this.cl2 * this.cdelta, 2));
    this.x = this.sl1 * this.sl2 + this.cl1 * this.cl2 * this.cdelta;

    this.ad = Math.atan2(this.y, this.x);
    return Math.round(this.ad * 6372795);
  }

  @Output() onFlag: EventEmitter<[]> = new EventEmitter<[]>()

  constructor(private sightServices: SightService) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit() {
    this.form = new FormGroup({
      duration: new FormControl(2, [Validators.required])
    });
    for (this.i = 0; this.i < 10; this.i++) {
      this.allSight[this.i] = false;
    }
  }

  changeRouteType(type: number) {
    switch(type) {
      case 1: this.walkInTheCenterFlag = true; this.museumWalkFlag = false; this.walkInTheParksFlag = false; this.routeSelected = false; this.sightForMap = []; break;
      case 2: this.walkInTheCenterFlag = false; this.museumWalkFlag = true; this.walkInTheParksFlag = false; this.routeSelected = false; this.sightForMap = []; break;
      case 3: this.walkInTheCenterFlag = false; this.museumWalkFlag = false; this.walkInTheParksFlag = true; this.routeSelected = false; this.sightForMap = []; break;
    }
  }

  async submit() {
    this.sightForMap = [];
    this.routeSelected = true;
    this.duration = this.form.value.duration;

    if (this.walkInTheCenterFlag) {
      try {
        this.sights = await this.sightServices.getSightWalkInTheCenter();
        this.sight = Object.values(this.sights)
      } catch(e) {
        console.log(e.massage);
      }
      this.random = this.getRandomInt(this.sight.length - 1)
      this.sightForMap[0] = this.sight[this.random];
      this.sight[this.random] = {name: "", latitude: "0", longitude: "0"};
      try{
        for (this.i = 0; this.i < this.duration * 5; this.i++) {
          for (this.j = 0; this.j < this.sight.length; this.j++) {
            if (this.calculateTheDistance(this.sightForMap[this.i].latitude, this.sightForMap[this.i].longitude, this.sight[this.j].latitude, this.sight[this.j].longitude) < 500) {
              this.time[this.i] = Math.round((this.calculateTheDistance(this.sightForMap[this.i].latitude, this.sightForMap[this.i].longitude, this.sight[this.j].latitude, this.sight[this.j].longitude) / 4000 * 60));
              this.sightForMap[this.i+1] = this.sight[this.j];
              console.log(this.i+" . "+this.sightForMap[this.i+1].name);
              this.sight[this.j] = {name: "Null", latitude: "1", longitude: "1"};
              break;
            }
          }
        }
      } catch(e) {
        console.log(e.message)
      }
      this.allDuration = 0;
      for (this.i=0; this.i<this.time.length; this.i++) {
        this.allDuration = this.allDuration + this.time[this.i];
      }
      
    }

    if (this.walkInTheParksFlag) {
      try {
        this.sights = await this.sightServices.getSightaWlkInTheParks();
        this.park = Object.values(this.sights)
      } catch(e) {
        console.log(e.massage);
      }
      for (this.i = 0; this.i < this.form.value.duration; this.i++) {
        this.random = this.getRandomInt(this.park.length);
        this.sightForMap[this.i] = this.park[this.random];
        if (this.i>0) {
          this.time[this.i - 1] = Math.round((this.calculateTheDistance(this.sightForMap[this.i-1].latitude, this.sightForMap[this.i-1].longitude, this.sightForMap[this.i].latitude, this.sightForMap[this.i].longitude) / 4000 * 60));
        }
        this.park.splice(this.random, 1);
      }
    }

    if (this.museumWalkFlag) {
      try {
        this.sights = await this.sightServices.getSightMuseumWalk();
        this.museum = Object.values(this.sights)
      } catch(e) {
        console.log(e.massage);
      }
      for (this.i = 0; this.i < this.form.value.duration; this.i++) {
        this.random = this.getRandomInt(this.museum.length - 1);
        this.sightForMap[this.i] = this.museum[this.random];
        console.log(this.sightForMap[this.i].name);
        if (this.i>0) {
          this.time[this.i - 1] = Math.round((this.calculateTheDistance(this.sightForMap[this.i-1].latitude, this.sightForMap[this.i-1].longitude, this.sightForMap[this.i].latitude, this.sightForMap[this.i].longitude) / 4000 * 60));
        }
        this.museum.splice(this.random, 1);
      }
    }
  }

  public options = {
    fillColor: '#7df9ff33',
    fillOpacity: 0.5,
    strokeColor: '#0000FF',
    strokeOpacity: 0.5,
    strokeWidth: 1,
    borderRadius: 6
  }

  openCard(number) {
   
  }

}
