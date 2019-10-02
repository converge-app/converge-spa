import {Button, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import {Formik} from 'formik';
import React from 'react';
import CreateProjectAmount from './form/create.project.amount';
import CreateProjectCategory from './form/create.project.category';
import CreateProjectDescription from './form/create.project.description';
import CreateProjectFiles from './form/create.project.files';
import CreateProjectSubCategory from './form/create.project.subcategory';
import CreateProjectTitle from './form/create.project.title';

const useStyles = makeStyles((theme) => ({
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
    files: string;
    amount: string;
}

const CreateProjectContent: React.FunctionComponent = () => {
    const classes = useStyles();
    return <Container maxWidth={'md'} className={classes.container}>
        <Typography variant={'h6'} className={classes.title}>
            What do you need to get done?
        </Typography>
        <Container maxWidth={'sm'} className={classes.container}>
            <Formik initialValues={{
                title: '',
                category: '',
                subCategory: '',
                description: '',
                files: '',
                amount: '',
            }}
            validate={values => {
                const errors: Partial<IFormValues> = {};
                console.log(values);
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}
            />
            <CreateProjectTitle/>
            <Grid container>
                <Grid container justify={'center'} xs={12}>
                    <Grid item xs><CreateProjectCategory/></Grid>
                    <Grid item xs><CreateProjectSubCategory/></Grid>
                </Grid>
            </Grid>
            <Grid container>
                <CreateProjectDescription/>
            </Grid>
            <Grid container>
                <CreateProjectFiles/>
            </Grid>
            <Grid container>
                <CreateProjectAmount/>
            </Grid>
            <Grid container>
                <Grid container justify={'center'} xs={12}>
                        <Grid item xs><Button className={classes.createButton} >Create</Button></Grid>
                        <Grid item xs><Button className={classes.cancelButton}>Cancel</Button></Grid>
                </Grid>
            </Grid>

        </Container>
    </Container>
};

export default CreateProjectContent;
