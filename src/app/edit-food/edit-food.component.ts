import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food.model';


@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})

export class EditFoodComponent implements OnInit {
  @Input() selectedFood;

  constructor() { }

  ngOnInit() {
  }

}
