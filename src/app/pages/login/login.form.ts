import { FormlyFieldConfig } from '@ngx-formly/core';

export let FIELDS: FormlyFieldConfig[] = [
    {
        key: 'username',
        type: 'input',
        validators: {
            validation: ['ip']
        },
        templateOptions: {
            label: 'Username',
            required: true,
            maxLength: 10
        }
    },
    {
        key: 'password',
        id: 'password',
        type: 'input',
        templateOptions: {
            label: 'Password',
            required: true,
            id: 'password',
            type: 'password'
        }
    }
];