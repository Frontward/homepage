import { Routes, RouterModule } from '@angular/router';

import { About } from './about.component';
import { ModuleWithProviders } from '@angular/core';
import { Author } from './components/author/author.component';
import { Company } from './components/company/company.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: About,
        children: [
            { path: 'author', component: Author },
            { path: 'company', component: Company }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);