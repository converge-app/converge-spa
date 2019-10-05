import {Link, Typography} from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../../styles/links/nav-bar.link';
import {INavBarLinkProps} from './nav-bar-link.props';

export function NavBarLinkFreelancers(props: INavBarLinkProps) {
    return (
        <NavBarLink href='/freelancers'>
            <Typography
                variant='body1'
                className={props.className}
                color='textPrimary'
                noWrap
            >
                <Link className={props.className}>Freelancers</Link>
            </Typography>
        </NavBarLink>
    );
}
