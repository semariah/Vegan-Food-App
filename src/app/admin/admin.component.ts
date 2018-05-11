import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, ingredient: string, diet: string, calories: number, method: string, id: number) {
    var newFood: Food = new Food(name, ingredient, diet, calories, method, id);
    console.log(newFood);
  }

}
