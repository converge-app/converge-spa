import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';

export function SignUpInputs(props: { className: any }) {
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
      <br />
      <Field
        className={props.className}
        type='password'
        label='Password'
        name='password'
        fullWidth
        component={TextField}
      />
      <br/>
        <Field
            className={props.className}
            type='password'
            label='Confirm password'
            name='confirmPassword'
            fullWidth
            component={TextField}
        />
    </>
  );
}
