import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Compositions } from '../../models/compositions';
import { Section } from '../../models/section';
import { CompositionsService } from '../../services/compositions.service';
import { SectionService } from '../../services/section.service';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {

  dish: Compositions;
  section: Array<Section>;

  constructor(private http: HttpClient, private router: Router,
              private composserv: CompositionsService,
              private dishserv: DishesService,
              private sectionserv: SectionService) { }

  ngOnInit() {
    this.dish = new Compositions();
    this.sectionserv.getAllSection().subscribe((data: Section[])  =>
    {
      this.section = data;
    });

  }

  saveDish() {
    this.dish.dish_section='Section_7d9f74f8-b8ff-45b8-9eb0-c0df5d5c8f36';
    this.composserv.createCompositions(this.dish)
      .subscribe(res => {

        }, (err) => {
          console.log(err);
        }
      );
/*    this.dishserv.createDish(this.dish.dish)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dish-details', id]);
        }, (err) => {
          console.log(err);
        }
      );*/
  }

}
