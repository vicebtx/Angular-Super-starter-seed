import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { DynamicFormsModule } from 'src/app/modules/dynamic-forms/dynamic-forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ]),
    DynamicFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}