import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Dishes } from '../../models/dishes';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {

  dish: Dishes;

  constructor(private http: HttpClient, private router: Router, private dishserv: DishesService) { }

  ngOnInit() {
  }

  saveDish() {
    this.dishserv.createDish(this.dish)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dish-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
