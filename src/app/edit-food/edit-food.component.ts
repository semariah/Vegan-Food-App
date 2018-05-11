import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css'],
  providers: [FoodService]
})

export class EditFoodComponent implements OnInit {
  @Input() selectedFood;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

}
