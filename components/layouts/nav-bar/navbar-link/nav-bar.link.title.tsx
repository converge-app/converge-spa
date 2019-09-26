import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import NavBarLink from '../../../styles/links/nav-bar.link';
import { INavBarLinkProps } from './nav-bar-link.props';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 24,
  },
}));

export const NavBarLinkTitle = (props: INavBarLinkProps) => {
  const classes = useStyles();
  return (
    <NavBarLink href='/'>
      <div className={props.className}>
        <Typography
          variant='h5'
          className={classes.title}
          color='textPrimary'
          noWrap
        >
          Converge
        </Typography>
      </div>
    </NavBarLink>
  );
};
