import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-budget',
  templateUrl: './user-budget.component.html',
  styleUrls: ['./user-budget.component.scss']
})
export class UserBudgetComponent implements OnInit {

  @Input() budget: number;

  constructor() { }

  ngOnInit() {
  }

}
