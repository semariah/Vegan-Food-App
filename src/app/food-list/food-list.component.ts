import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [FoodService]
})
export class FoodListComponent implements OnInit {
  foods: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private foodService: FoodService) { }


  ngOnInit(){
    this.foods = this.foodService.getFoods();

  }

  goToDetailPage(clickedFood) {
    this.router.navigate(['foods', clickedFood.$key]);
   };




}
