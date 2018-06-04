import { Component, OnInit } from '@angular/core';

import { Dishes } from '../../models/dishes';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Array<Dishes>;

  constructor(private dish: DishesService) {
    this.dishes = new Array<Dishes>();
  }

  ngOnInit() {
    this.loadDishes();
  }

  private loadDishes() {
    this.dish.getAllDishes().subscribe((data: Dishes[]) => {
      this.dishes = data;
    });
  }

}
