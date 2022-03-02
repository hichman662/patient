/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AdaptationTypeRequired } from './../../models/adaptationTypeRequired.model';
import { AdaptationRequest } from './../../models/adaptationRequest.model';
import { PatientService } from './../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdaptationDetailRequired } from 'src/app/models/adaptationDetailRequired.model';

@Component({
  selector: 'app-detail-access-mode',
  templateUrl: './detail-access-mode.component.html',
  styleUrls: ['./detail-access-mode.component.scss'],
})
export class DetailAccessModeComponent implements OnInit {

  public AdaptationRequests: AdaptationRequest [] = [];
  public AdaptationTypes: AdaptationTypeRequired [] = [];
  public AdaptationDetails: AdaptationDetailRequired [] = [];
    segmentModel = 'AdaptationRequest';
  private idPassedByURL: number = null;
  constructor() { }

  ngOnInit() {}

}
