/* eslint-disable @typescript-eslint/naming-convention */
import { RelatedPerson } from './../models/relatedPerson.model';
import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonItemSliding, AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-rel-person',
  templateUrl: './rel-person.page.html',
  styleUrls: ['./rel-person.page.scss'],
})
export class RelPersonPage implements OnInit {

  public relatedPersons: RelatedPerson[] = [{Id:0, Name:'test'}];
  public idScenario: number;
  relPersonNull= false;
  constructor(
    public router: Router,
    private storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }


closeSliding(slidingItem: IonItemSliding){
  slidingItem.close();
}

ionViewWillEnter(){

}

async deleterelatedPerson(slidingItem: IonItemSliding, id: number, name: string){
  slidingItem.close();
  console.log(id);
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Remove Related Person',
    message: `Are you sure you want remove ${name}?`,
    buttons: [  {
      text: 'Cancel',
      handler: () => {
        console.log('Disagree clicked');
      }
    },
    {
      text: 'Agree',
      handler: () => {
        console.log('Agree clicked');
      /*   this.patientService.deleteRelatedPerson(id)
        // tslint:disable-next-line: deprecation
        .subscribe( (res: any) => {
          this.ionViewWillEnter();
        }, ( err) => {
            console.log(err);
        }); */
      }
    }]
  });

  await alert.present();

}

}
