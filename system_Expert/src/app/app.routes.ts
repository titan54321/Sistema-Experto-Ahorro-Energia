import { Routes } from '@angular/router';
import { EnergyFormComponent } from './components/energy-form/energy-form.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

export const routes: Routes = [
  { path: '', component: EnergyFormComponent },
  { path: 'recomendaciones', component: RecommendationsComponent },
  {path: 'formenergy', component: EnergyFormComponent }
];
