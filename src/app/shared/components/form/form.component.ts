import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      duration: new FormControl(2, [Validators.required])
    });
  }

  changeRouteType(type: number) {
    switch(type) {
      case 1: this.walkInTheCenterFlag = true; this.museumWalkFlag = false; this.walkInTheParksFlag = false; break;
      case 2: this.walkInTheCenterFlag = false; this.museumWalkFlag = true; this.walkInTheParksFlag = false; break;
      case 3: this.walkInTheCenterFlag = false; this.museumWalkFlag = false; this.walkInTheParksFlag = true; break;
    }
  }

  submit() {
    this.routeSelected = true;
    console.log({...this.form.value})
  }

}
