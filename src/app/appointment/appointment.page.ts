import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public activityName: '';
  public activityDescrip: '';
  public appointmentName: '';
  public appointmentDescrip: '';
  public valueCareActivity: any;
  public appointmentDetail: any;
  public appointmentDate: any;
  segmentModel = 'appointment';
  constructor() { }

  ngOnInit() {
  }

}
