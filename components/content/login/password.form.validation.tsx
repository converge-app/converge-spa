import {IFormValues} from './login.form.values';

export const validatePassword = (values: any, errors: Partial<IFormValues>) => {
    if (!values.password) {
        errors.password = 'Required';
    }
};
