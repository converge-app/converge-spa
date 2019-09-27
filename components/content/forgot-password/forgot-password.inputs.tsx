import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';

export function ForgotPasswordInputs(props: { className: any }) {
  return (
    <>
      <Field
        className={props.className}
        name='email'
        type='email'
        label='Email'
        fullWidth
        component={TextField}
      />
    </>
  );
}
