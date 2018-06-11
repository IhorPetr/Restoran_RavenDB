import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Dishes } from '../models/dishes';

@Injectable()
export class DishesService {

  //private url = "https://ravendb-client.herokuapp.com/dishes";
  private url = "assets/FakeJson/dishes.json";
  constructor(private http: HttpClient){ }

  getAllDishes(){
    return this.http.get(this.url);
  }

  getDish(id: string){
    return this.http.get(this.url+ '/' +id);
  }

  createDish(dish: Dishes) {
    return this.http.post(this.url, dish);
  }

  updateDish(id: string, dish: Dishes) {
    return this.http.put(this.url + '/' +id, dish);
  }

  deleteDish(id: string) {
    return this.http.delete(this.url + '/' +id);
  }
}
