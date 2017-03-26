//Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({

  //Components
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],

  //Modules
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule
  ],
  
  //Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
