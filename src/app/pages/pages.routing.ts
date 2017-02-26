import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'start', loadChildren: 'app/pages/start/start.module#StartModule' },
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
      { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
