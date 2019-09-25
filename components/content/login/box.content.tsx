import {LinearProgress, Typography} from '@material-ui/core';
import {Form} from 'formik';
import React from 'react';
import NavBarLink from '../../styles/links/nav-bar.link';
import {ForgotPassword} from './login.content';

export const BoxFormContent = (props: { classes: any, title: string, disabled: boolean,  inputFields: (Fields: any) => any, submitButton: (Fields: any) => any }) =>
    <div className={props.classes.wrapper}>
        <Form>
            <div className={props.classes.box}>
                <div className={props.classes.titleContainer}>
                    <Typography variant='h2' component='h2'>{props.title.toUpperCase()}</Typography>
                </div>
                <div className={props.classes.inputContainer}>
                    <div className={props.classes.root}>
                        {props.inputFields}
                    </div>
                </div>
                <div className={props.classes.buttonsContainer}>
                    <br/>
                    {props.submitButton}
                    <NavBarLink href={'/forgot-password'}
                    >
                        {props.submitButton}
                        <ForgotPassword className={props.classes.forgotPassword}/>
                    </NavBarLink>
                    {props.disabled && <LinearProgress/>}
                </div>
            </div>
        </Form>
    </div>;
