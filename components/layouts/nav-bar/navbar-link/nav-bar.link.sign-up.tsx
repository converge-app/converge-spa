import { Button } from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../../styles/links/nav-bar.link';
import { INavBarLinkProps } from './nav-bar-link.props';

export function NavBarLinkSignup(props: INavBarLinkProps) {
  return (
    <NavBarLink href='/sign-up'>
      <Button variant='contained' color='secondary' className={props.className}>
        Sign up
      </Button>
    </NavBarLink>
  );
}
