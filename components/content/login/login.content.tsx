import {
    Button,
    LinearProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import React from 'react';

const useStyles = makeStyles((theme) => ({
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
    },
    inputContainer: {
        gridArea: 'input',
    },
    buttonsContainer: {
        gridArea: 'buttons',
    },
    root: {
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.primary.main,
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
}))

interface IValues {
    email: string
}

export const LoginContent: React.FunctionComponent = () => {
    const classes = useStyles()

    const initialValues: { password: string; email: string } = {
        email: '',
        password: '',
    }

    function validateForm(values: any) {
        const errors: Partial<IValues> = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }
        return errors
    }

    return (<Formik initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            alert(JSON.stringify(values, null, 2))
                        }, 500)
                    }
                    }
                    render={({submitForm, isSubmitting}) => (

                        <div className={classes.wrapper}>
                            <Form>
                                <div className={classes.box}>
                                    <div className={classes.titleContainer}>
                                        <Typography variant='h3' component='h2'>LOGIN</Typography>
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <div className={classes.root}>

                                            <Field
                                                name='email'
                                                type='email'
                                                label='Email'
                                                component={TextField}
                                            />
                                            <br/>
                                            <Field
                                            type='password'
                                            label='Password'
                                            name='password'
                                            component={TextField}
                                            />
                                        </div>
                                    </div>
                                    <div className={classes.buttonsContainer}>
                                        {isSubmitting && <LinearProgress/>}
                                        <br/>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            disabled={isSubmitting}
                                            onClick={submitForm}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>

                    )}
    >

    </Formik>)

}
