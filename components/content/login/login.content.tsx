import {FormControl, Input, InputLabel, makeStyles, Typography} from '@material-ui/core';
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

export const LoginContent: React.FunctionComponent = () => {
    const classes = useStyles()

    // @ts-ignore
    const [email, setEmail] = React.useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    return <div className={classes.wrapper}>
        <div className={classes.box}>
            <div className={classes.titleContainer}>
                <Typography variant='h3' component='h2'>LOGIN</Typography>
            </div>
            <div className={classes.inputContainer}>
                    <FormControl fullWidth={true} className={classes.root}>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input id='email' value={email} onChange={handleChange} fullWidth={true} required type="email"/>
                    </FormControl>
            </div>
            <div className={classes.buttonsContainer}>
            </div>
        </div>
    </div>;
}
