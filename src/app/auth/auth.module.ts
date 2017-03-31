import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }  from '../shared';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AltLoginComponent } from './alt-login';
import { AuthRoutingModule} from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@NgModule({

  //Components
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AltLoginComponent
  ],
  
  //Modules
  imports: [
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ AuthService ]
})

export class AuthModule {}
