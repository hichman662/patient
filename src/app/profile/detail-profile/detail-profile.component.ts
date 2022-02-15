import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss'],
})
export class DetailProfileComponent implements OnInit {
  name = '';

  public patientProfile: any;
  public diseases: any [] = [];
  public disabilities: any [] = [];
  public patientProfileNull = false;
  public allPatientProfile: any [] = [];
  patientprofileId: number;
    segmentModel = 'details';
  public patientId: any;
  private idScenario: number;
  constructor() { }

  ngOnInit() {}

}
