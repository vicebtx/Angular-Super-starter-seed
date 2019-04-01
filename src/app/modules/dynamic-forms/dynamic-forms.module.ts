import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { IonicModule } from '@ionic/angular';
import { FormlyIonicModule } from './ui-ionic.module';
import { VALIDATORS } from './validators';

@NgModule({
  declarations: [],
  imports: [
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forChild(
      {
        ...VALIDATORS
      }
    ),
    FormlyIonicModule
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule
  ]
})
export class DynamicFormsModule { }
