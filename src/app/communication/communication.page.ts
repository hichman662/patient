import { Communication } from './../models/communication.model';
import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {

  public communicationName: '';
  public communicationDescrip: '';
  public valueCareActivity: any;
  public communicationDetail: any;
  public careActivityName: '';
  public careActivityDescrip: '';
  segmentModel = 'communication';
  private idPassedByURL: number = null;
  constructor() { }

  ngOnInit() {
  }

}
