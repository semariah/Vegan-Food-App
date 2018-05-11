import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [FoodService]
})
export class FoodListComponent {
  foods: Food[];

  constructor(private router: Router, private foodService: FoodService) { }

  goToDetailPage(clickedFood: Food) {
     this.router.navigate(['foods', clickedFood.id]);
   };




}
