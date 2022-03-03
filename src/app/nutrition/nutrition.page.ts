import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {

  public nutritionName: '';
  public nutritionDescrip: '';
  public valueCareActivity: any;
  public nutritionDetail: any;
  public careActivityName: '';
  public careActivityDescrip: '';
  segmentModel = 'nutrition';
  private idPassedByURL: number = null;
  constructor() { }

  ngOnInit() {
  }

}
