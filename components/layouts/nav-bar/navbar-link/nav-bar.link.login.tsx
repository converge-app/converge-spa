import {Button} from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../../styles/links/nav-bar.link';
import {INavBarLinkProps} from './nav-bar-link.props';

export function NavBarLinkLogin(props: INavBarLinkProps) {
    return <NavBarLink href='/login'>
        <Button
            variant='outlined'
            color='secondary'
            className={props.className}
        >
            Login
        </Button>
    </NavBarLink>;
}
