import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'patientAccess',
    loadChildren: () => import('../patient-access/patient-access.module').then( m => m.PatientAccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
