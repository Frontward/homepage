import { Routes, RouterModule } from '@angular/router';

import { Contact } from './contact.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: Contact
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);