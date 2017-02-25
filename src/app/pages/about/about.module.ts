import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { About } from './about.component';
import { Author } from './components/author/author.component';
import { Company } from './components/company/company.component';
import { routing }       from './about.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    About,
        Author,
    Company
  ]
})
export class AboutModule {}
