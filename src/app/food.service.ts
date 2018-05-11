import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { FOODS } from './mock-foods';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FoodService {
  foods: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.foods = database.list('foods');
  }

  getFoods(){
    return this.foods;
  }

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }

  getFoodById(foodId: string){
    return this.database.object('foods/' + foodId);
  }


}
