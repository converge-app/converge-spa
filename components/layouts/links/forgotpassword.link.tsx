import {Typography} from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../styles/links/nav-bar.link';

export function ForgotPassword(props: { className: any }) {
    return (
        <NavBarLink href={'/forgot-password'}>
            <Typography variant='body1' className={props.className}>
                Forgot Password?
            </Typography>
        </NavBarLink>
    );
}
