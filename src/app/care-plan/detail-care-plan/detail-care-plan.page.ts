/* eslint-disable no-trailing-spaces */
import { Target } from './../../models/target.model';
import { Goal } from './../../models/goal.model';

import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarePlan } from 'src/app/models/carePlan.model';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-detail-care-plan',
  templateUrl: './detail-care-plan.page.html',
  styleUrls: ['./detail-care-plan.page.scss'],
})
export class DetailCarePlanPage implements OnInit {

  public carePlan: CarePlan;
  public carePlanName: '';
  public carePlanDescription: '';
  public goals: Goal[];
  public targets: Target[];
  carePlanDetailNull = false;
  segmentModel = 'details';
  patientProfileId: number;
  carePlantemplateForm: FormGroup;
  idcarePlantemplate: number;
  private idPassedByURL: number = null;

  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute,
    private storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
  }

}
