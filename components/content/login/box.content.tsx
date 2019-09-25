import {LinearProgress, Typography} from '@material-ui/core';
import {Form} from 'formik';
import React from 'react';
import NavBarLink from '../../styles/links/nav-bar.link';
import {ForgotPassword, LoginInputs, SubmitButton} from './login.content';

export const BoxFormContent = (props: { classes: any, title: string, disabled: boolean, onClick: () => void, buttonText: string, inputFields: (Fields: any) => any, submitButton: (Fields: any) => any }) =>
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
                    <SubmitButton className={props.classes.submitButton} disabled={props.disabled}
                                  onClick={props.onClick}
                                  buttonText={props.buttonText}/>
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
