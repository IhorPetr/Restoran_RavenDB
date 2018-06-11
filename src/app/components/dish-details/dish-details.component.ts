import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Compositions } from '../../models/compositions';
import { CompositionsService } from '../../services/compositions.service';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  composition: Compositions;

  constructor(private route: ActivatedRoute, private router: Router,
              private http: HttpClient, private compos: CompositionsService,
              private dishserv: DishesService) { }

  ngOnInit() {
    this.getCompositionsDetail(this.route.snapshot.params['id']);
  }

  getCompositionsDetail(id: string) {
    this.compos.getAllCompositions().subscribe((data: Compositions[]) => {
      this.composition = data.find((a)=> a.dish.id === id);
    });
  }

  deleteDish() {
    this.dishserv.deleteDish(this.composition.dish.id);
    this.compos.deleteCompositions(this.composition.id).subscribe(res => {
          this.router.navigate(['/Menu']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
