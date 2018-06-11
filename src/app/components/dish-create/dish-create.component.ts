import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Compositions } from '../../models/compositions';
import { CompositionsService } from '../../services/compositions.service';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {

  dish: Compositions;

  constructor(private http: HttpClient, private router: Router, private composserv: CompositionsService, private dishserv: DishesService) { }

  ngOnInit() {
    this.dish = new Compositions();
  }

  saveDish() {
    this.composserv.createCompositions(this.dish)
      .subscribe(res => {

        }, (err) => {
          console.log(err);
        }
      );
    this.dishserv.createDish(this.dish.dish)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dish-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
