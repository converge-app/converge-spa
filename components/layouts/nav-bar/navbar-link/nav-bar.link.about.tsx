import { Link, Typography } from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../../styles/links/nav-bar.link';
import { INavBarLinkProps } from './nav-bar-link.props';

export const NavBarLinkAbout = (props: INavBarLinkProps) => (
  <NavBarLink href='/about'>
    <Typography
      variant='body1'
      className={props.className}
      color='textPrimary'
      noWrap
    >
      <Link className={props.className}>About</Link>
    </Typography>
  </NavBarLink>
);
