import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Compositions } from '../../models/compositions';
import { CompositionsService } from '../../services/compositions.service';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  composition: Compositions;

  constructor(private router: Router, private route: ActivatedRoute, private compos: CompositionsService, private dishserv: DishesService) { }

  ngOnInit() {
    this.getDish(this.route.snapshot.params['id']);
  }

  getDish(id) {
    this.compos.getAllCompositions().subscribe((data: Compositions[]) => {
      this.composition = data.find((a)=> a.dish.id === id);
    });
  }

  updateDish(id: string) {
    this.dishserv.updateDish(this.composition.dish.id,this.composition.dish)
     .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
    );
    this.compos.updateCompositions(id, this.composition)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dish-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
