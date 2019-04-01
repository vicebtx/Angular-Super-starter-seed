import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper, Field } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-ion-form-field',
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.scss']
})
export class FormlyWrapperFormField extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
