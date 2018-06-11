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
    return this.http.post(this.url, dish);
  }

  updateCompositions(id: string, dish: Compositions) {
    return this.http.put(this.url + '/' +id, dish);
  }

  deleteCompositions(id: string) {
    return this.http.delete(this.url + '/' +id);
  }

}
