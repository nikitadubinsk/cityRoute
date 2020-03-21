import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SightService } from 'src/app/shared/service/sight.service';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {

  form: FormGroup;

  constructor(private sightServices: SightService) { }

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl('', [Validators.required, Validators.minLength(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      latitude: new FormControl('', [Validators.required, Validators.minLength(1)]),
      longitude: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', []),
      features: new FormControl('', [])
    });
  }

  async submit() {
    console.log(this.form.value);
    try {
      await this.sightServices.addSight(this.form.value);
    } catch(e) {
      console.log(e.massage);
    }
  }

  

}
