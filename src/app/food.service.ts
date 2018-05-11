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

  getFoods() {
    return this.foods;
  }

  getFoodById(foodId: number){
    for (var i = 0; i <= FOODS.length - 1; i++) {
      if (FOODS[i].id === foodId) {
        return FOODS[i];
      }
    }
  }


}
