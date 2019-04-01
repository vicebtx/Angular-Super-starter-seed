import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function ipValidator(control: FormControl): ValidationErrors {
    let res = { 'ip': true };
    if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(control.value)){
        return null
    }  
    return res;
}

export function ipValidatorMessage(err, field: FormlyFieldConfig) {
    return `"${field.formControl.value}" is not a valid IP Address`;
}