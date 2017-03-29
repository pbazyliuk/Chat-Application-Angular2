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

//Service
import { AuthService } from './core/auth.service'
import { AuthGuard } from "./auth/auth.guard.service";

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
  providers: [AuthService, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
