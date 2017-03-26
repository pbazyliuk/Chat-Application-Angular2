//Modules
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

//Components
import { FilterTextComponent } from './filter-text.component';

@NgModule({

  //Modules
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //Modules
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //Components
  declarations: [
    FilterTextComponent
  ],
  providers: []
})

export class SharedModule { }
