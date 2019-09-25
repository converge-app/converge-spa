import { Button, makeStyles, Typography } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { BoxForm } from './box-form';
import { BoxFormContent } from './box.content';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: 50,
    marginBottom: 50,
    flex: '100 100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 400,
    minHeight: 500,
    padding: theme.spacing(6, 4),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.text.primary,
    display: 'grid',
    gridTemplateAreas: `
            'title'
            'input'
            'buttons'`,
    gridGap: 40,
  },
  titleContainer: {
    gridArea: 'title',
    justifySelf: 'start',
    alignSelf: 'start',
  },
  inputContainer: {
    gridArea: 'input',
    justifySelf: 'stretch',
    alignSelf: 'center',
  },
  buttonsContainer: {
    gridArea: 'buttons',
    justifySelf: 'stretch',
    alignSelf: 'end',
  },
  root: {
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.palette.secondary.main,
    },
    '& input:valid + fieldset': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& input:invalid + fieldset': {
      borderBottomColor: theme.palette.error.main,
    },
  },
  field: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
  },
}));

export interface IFormValues {
  email: string;
  password: string;
}

export function LoginInputs(props: { className: any }) {
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
    </>
  );
}

export function SubmitButton(props: {
  className?: any;
  disabled: boolean;
  onClick: () => void;
  buttonText: string;
}) {
  return (
    <Button
      variant='outlined'
      color='secondary'
      size='large'
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.buttonText.toUpperCase()}
    </Button>
  );
}

export function ForgotPassword(props: { className: any }) {
  return (
    <Typography variant='body1' className={props.className}>
      Forgot Password?
    </Typography>
  );
}

export const LoginContent: React.FunctionComponent = () => {
  const classes = useStyles();

  const initialValues: IFormValues = {
    email: '',
    password: '',
  };

  const validateEmail = (values: any, errors: Partial<IFormValues>) => {
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  };

  const validatePassword = (values: any, errors: Partial<IFormValues>) => {
    if (!values.password) {
      errors.password = 'Required';
    }
  };

  function validateForm(values: any) {
    const errors: Partial<IFormValues> = {};
    validateEmail(values, errors);
    validatePassword(values, errors);
    return errors;
  }

  const [title] = React.useState('Login');
  const [buttonText] = React.useState('login');

  const getOnSubmit = () => () => {
    // todo
  };

  return (
    <BoxForm
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={getOnSubmit()}
      render={({ submitForm, isSubmitting }) => (
        <BoxFormContent
          classes={classes}
          title={title}
          disabled={isSubmitting}
          inputFields={() => <LoginInputs className={classes.field} />}
          submitButton={() => (
            <SubmitButton
              className={classes.submitButton}
              disabled={isSubmitting}
              onClick={submitForm}
              buttonText={buttonText}
            />
          )}
        />
      )}
    />
  );
};
