import { ConfigOption } from '@ngx-formly/core';
import { ipValidatorMessage, ipValidator } from './validators/ip.validator';

export const VALIDATORS: ConfigOption = {
    validators: [
        { name: 'ip', validation: ipValidator }
    ],
    validationMessages: [
        { name: 'required', message: 'This field is required' },
        {
            name: 'maxlength',
            message: (err, field)=>`Should have less than ${field.templateOptions.maxLength} characters` 
        },
        {
            name: 'minlength',
            message: (err, field) => `Should have atleast ${field.templateOptions.minLength} characters`
        },
        { name: 'ip', message: ipValidatorMessage },
    ]
}