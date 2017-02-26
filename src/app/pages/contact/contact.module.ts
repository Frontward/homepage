import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { Contact } from './contact.component';
import { routing }       from './contact.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Contact
  ]
})
export class ContactModule {}
