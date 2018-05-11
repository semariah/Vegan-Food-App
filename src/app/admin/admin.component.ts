import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FoodService]
})
export class AdminComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  submitForm(name: string, ingredient: string, diet: string, calories: number, method: string) {
    var newFood: Food = new Food(name, ingredient, diet, calories, method);
    this.foodService.addFood(newFood);

  }

}
