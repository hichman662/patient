import { Medication } from './../models/medication.model';
import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

  public medicationName: '';
  public medicationDescrip: '';
  public valueCareActivity: any;
  public medicationDetail: any;
  public careActivityName: '';
  careActivityDescrip: '';
  segmentModel = 'medication';
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
  }

}
