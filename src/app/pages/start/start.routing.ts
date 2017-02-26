import { Routes, RouterModule } from '@angular/router';

import { Start } from './start.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Start
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);



