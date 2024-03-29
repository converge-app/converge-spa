import { makeStyles, Typography, Link as MatLink } from '@material-ui/core';
import React from 'react';
import { BoxFormContent } from '../../layouts/forms/box.content';
import { validateConfirmPassword } from '../../layouts/forms/validation/confirmPassword.form.validation';
import { validateEmail } from '../../layouts/forms/validation/email.form.validation';
import { validatePassword } from '../../layouts/forms/validation/password.form.validation';
import { SubmitButton } from '../../styles/buttons/button.submit';
import { ProgressBar } from '../../styles/utility/progress-bar';
import { BoxForm } from './box-form';
import { IFormValues } from './sign-up.form.values';
import { SignUpInputs } from './sign-up.inputs';
import Link from 'next/link';

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
    width: 450,
    minHeight: 600,
    padding: theme.spacing(8, 6),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
    display: 'grid',
    gridTemplateAreas: `
            'title'
            'input'
            'buttons'`,
    gridGap: 40,
    boxShadow: '2px 2px 30px rgba(0,0,0,0.15)',
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

// @ts-ignore
export const SignUpContent = ({ submitSignUp }) => {
  const classes = useStyles();

  const initialValues: IFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  function validateForm(values: any) {
    const errors: Partial<IFormValues> = {};
    validateEmail(values, errors);
    validatePassword(values, errors);
    validateConfirmPassword(values, errors);
    return errors;
  }

  const [title] = React.useState('Sign up');
  const [buttonText] = React.useState('register');

  // @ts-ignore
  const getOnSubmit = (values: IFormValues, { setSubmitting }) => {
    submitSignUp(values);
    setSubmitting(false);
  };

  return (
    <BoxForm
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={getOnSubmit}
      render={({ submitForm, isSubmitting }) => (
        <BoxFormContent classes={classes} title={title} disabled={isSubmitting}>
          <div className={classes.titleContainer}>
            <Typography variant='h2' component='h2'>
              {title.toUpperCase()}
            </Typography>
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.root}>
              <SignUpInputs className={classes.field} />
            </div>
          </div>
          <div className={classes.buttonsContainer}>
            <div>
              <Typography color="textSecondary">
                By pressing register, you accept our{' '}
                <Link href={'/terms-of-use'}>
                  <MatLink>Terms of Use</MatLink>
                </Link>
              </Typography>
              <br />
              <SubmitButton
                className={classes.submitButton}
                disabled={isSubmitting}
                onClick={submitForm}
                buttonText={buttonText}
              />
              <ProgressBar submitting={isSubmitting} />
            </div>
          </div>
        </BoxFormContent>
      )}
    />
  );
};
