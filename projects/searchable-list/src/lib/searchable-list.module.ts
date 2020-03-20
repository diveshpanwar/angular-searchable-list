import { NgModule } from '@angular/core';
import { SearchableListComponent } from './searchable-list.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [SearchableListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [SearchableListComponent]
})
export class SearchableListModule { }
