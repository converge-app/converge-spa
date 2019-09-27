import {IFormValues} from '../../../content/sign-up/sign-up.form.values';

export const validateConfirmPassword = (values: any, errors: Partial<IFormValues>) => {
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    }
};
