import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryFormComponent} from './entry-form/entry-form.component';

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EntriesModule { }
