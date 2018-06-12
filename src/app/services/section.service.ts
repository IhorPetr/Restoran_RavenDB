import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable()
export class SectionService {

  private url = "assets/FakeJson/section.json";


  constructor(private http: HttpClient){ }

  getAllSection(){
    return this.http.get(this.url);
  }

}
