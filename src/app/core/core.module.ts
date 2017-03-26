import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { NavbarComponent } from './navbar';
import { HeaderComponent } from './header'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  providers: []
})

export class CoreModule { }
