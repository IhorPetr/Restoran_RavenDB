import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class CompositionsService {

  //private url = "https://ravendb-client.herokuapp.com/dishes";
  private url = "assets/FakeJson/composition.json";
  constructor(private http: HttpClient){ }

  getAllCompositions(){
    return this.http.get(this.url);
  }

}
