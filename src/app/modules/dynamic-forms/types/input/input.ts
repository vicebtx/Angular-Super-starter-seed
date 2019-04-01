import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-ion-input',
  templateUrl: 'input.html',
  styles: [':host { display: inherit; }'],
})
export class FormlyFieldInput extends FieldType {}
