import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sight } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class SightService {

  type;

  constructor(private http: HttpClient) { }

  addSight(sight: Sight) {
    switch (sight.type) {
      case 'Прогулка по центру города': this.type = 'walkInTheCenter'; break;
      case 'Музей': this.type = 'museumWalk'; break;
      case 'Парк': this.type = 'walkInTheParks'; break;
    }
    return this.http.post(`https://cityroute-2be8a.firebaseio.com/ivanovo/${this.type}.json`, sight).toPromise()
  }

  getSightWalkInTheCenter() {
    return this.http.get<Sight[]>(`https://cityroute-2be8a.firebaseio.com/ivanovo/walkInTheCenter.json`).toPromise();
  }

  getSightMuseumWalk() {
    return this.http.get<Sight[]>(`https://cityroute-2be8a.firebaseio.com/ivanovo/museumWalk.json`).toPromise();
  }

  getSightaWlkInTheParks() {
    return this.http.get<Sight[]>(`https://cityroute-2be8a.firebaseio.com/ivanovo/walkInTheParks.json`).toPromise();
  }
}
