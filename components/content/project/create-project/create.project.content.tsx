import {Button, Container, Grid, makeStyles, Typography,} from '@material-ui/core';
import {Form, Formik} from 'formik';
import Router from 'next/router';
import React from 'react';
import CreateProjectAmount from './form/create.project.amount';
import CreateProjectCategory from './form/create.project.category';
import CreateProjectDescription from './form/create.project.description';
import CreateProjectFiles from './form/create.project.files';
import CreateProjectSubCategory from './form/create.project.subcategory';
import CreateProjectTitle from './form/create.project.title';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
    },
    title: {
        color: theme.palette.primary.main,
    },
    createButton: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    cancelButton: {
        backgroundColor: theme.palette.error.main,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
}));

interface IFormValues {
    title: string;
    category: string;
    subCategory: string;
    description: string;
    amount: string;
}

interface IProps {
    submitCreateProject(values: any, setSubmitting: (value: boolean) => void): void
}

const CreateProjectContent: React.FunctionComponent<IProps> = (props) => {

    const classes = useStyles();

    function goBack() {
        Router.back()
    }

    return (
        <Container maxWidth={'md'} className={classes.container}>
            <Typography variant={'h6'} className={classes.title}>
                What do you need to get done?
            </Typography>
            <Container maxWidth={'sm'} className={classes.container}>
                <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        subCategory: '',
                        description: '',
                        files: '',
                        amount: 0.0,
                    }}
                    validate={values => {
                        const errors: Partial<IFormValues> = {};
                        if (!values.title) {
                            errors.title = 'Required'
                        }
                        if (!values.category) {
                            errors.category = 'Required'
                        }
                        if (!values.subCategory) {
                            errors.subCategory = 'Required'
                        }
                        if (!values.description) {
                            errors.description = 'Required'
                        }
                        if (values.amount <= 0) {
                            errors.amount = 'Required'
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        props.submitCreateProject(values, setSubmitting);
                    }}
                    render={({submitForm, isSubmitting, values}) => (
                        <Form>
                            <Grid container spacing={5} justify="space-between">
                                <Grid item xs={12}>
                                    <CreateProjectTitle/>
                                </Grid>
                                <Grid item xs={6}>
                                    <CreateProjectCategory/>
                                </Grid>
                                <Grid item xs={6}>
                                    <CreateProjectSubCategory category={values.category}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <CreateProjectDescription/>
                                </Grid>
                                <CreateProjectFiles/>
                                <Grid item xs={12}>
                                    <CreateProjectAmount/>
                                </Grid>
                                <Grid item>
                                    <Button
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                        className={classes.createButton}
                                    >
                                        Create
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.cancelButton} onClick={goBack}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                />
            </Container>
        </Container>
    );
};

export default CreateProjectContent;
