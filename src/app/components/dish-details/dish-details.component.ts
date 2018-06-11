import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Compositions } from '../../models/compositions';
import { CompositionsService } from '../../services/compositions.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  composition: Compositions;

  constructor(private route: ActivatedRoute, private http: HttpClient, private compos: CompositionsService) { }

  ngOnInit() {
    this.getCompositionsDetail(this.route.snapshot.params['id']);
  }

  getCompositionsDetail(id: string) {
    this.compos.getAllCompositions().subscribe((data: Compositions[]) => {
      this.composition = data.find((a)=> a.dish.id === id);
    });
  }

}
