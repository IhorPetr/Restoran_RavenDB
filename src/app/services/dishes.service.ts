import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DishesService {

  //private url = "https://ravendb-client.herokuapp.com/test/dishes";
  private url = "assets/FakeJson/dishes.json";
  constructor(private http: HttpClient){ }

  getAllDishes(){
    return this.http.get(this.url);
  }

  getDish(id: string){
    return this.http.get(this.url+id);
  }

}
