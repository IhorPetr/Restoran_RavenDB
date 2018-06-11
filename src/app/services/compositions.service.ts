import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Compositions } from '../models/compositions';

@Injectable()
export class CompositionsService {

  //private url = "https://ravendb-client.herokuapp.com/dishes";
  private url = "assets/FakeJson/composition.json";
  constructor(private http: HttpClient){ }

  getAllCompositions(){
    return this.http.get(this.url);
  }

  createCompositions(dish: Compositions) {
    this.http.post(this.url, dish);
  }

  updateCompositions(id: string, dish: Compositions) {
    this.http.put(this.url + '/' +id, dish);
  }

}
