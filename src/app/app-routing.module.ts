import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'patient-access',
    loadChildren: () => import('./patient-access/patient-access.module').then( m => m.PatientAccessPageModule)
  },
  {
    path: 'rel-person',
    loadChildren: () => import('./rel-person/rel-person.module').then( m => m.RelPersonPageModule)
  },
  {
    path: 'care-plan',
    loadChildren: () => import('./care-plan/care-plan.module').then( m => m.CarePlanPageModule)
  },
  {
    path: 'care-activity',
    loadChildren: () => import('./care-activity/care-activity.module').then( m => m.CareActivityPageModule)
  },
  {
    path: 'vital-sign',
    loadChildren: () => import('./vital-sign/vital-sign.module').then( m => m.VitalSignPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
