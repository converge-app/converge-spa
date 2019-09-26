import { IFormValues } from './login.form.values';

export const validateEmail = (values: any, errors: Partial<IFormValues>) => {
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
};
