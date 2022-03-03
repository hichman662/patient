import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CareActivity } from 'src/app/models/careActivity.model';

@Component({
  selector: 'app-detail-care-activity',
  templateUrl: './detail-care-activity.page.html',
  styleUrls: ['./detail-care-activity.page.scss'],
})
export class DetailCareActivityPage implements OnInit {


  public patientName: '';
  public patientDescrip: '';
  public patientData: CareActivity;
  public idScenario: number;
  segmentModel = 'details';

  constructor() { }

  ngOnInit() {
  }

}
