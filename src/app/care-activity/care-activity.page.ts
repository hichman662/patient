import { CarePlanService } from './../services/careplan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-care-activity',
  templateUrl: './care-activity.page.html',
  styleUrls: ['./care-activity.page.scss'],
})
export class CareActivityPage implements OnInit {

  public careActivities: any[] = [];
  public idScenario: number;
  public valueCareActivity: number;
  public careActivityNull = false;
  public nameCareActivity='';
  constructor(
    private carePlanService: CarePlanService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
  }

}
