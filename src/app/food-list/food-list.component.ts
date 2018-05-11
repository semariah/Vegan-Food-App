import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foods: Food[];

  constructor(private router: Router) { }

  goToDetailPage(clickedFood: Food) {
     this.router.navigate(['foods', clickedFood.id]);
   };




}
