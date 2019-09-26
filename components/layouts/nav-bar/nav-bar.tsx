import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Ruler } from '../ruler';
import { NavBarIcon } from './nav-bar.icon';
import {
  NavBarLinkAbout,
  NavBarLinkEmployers,
  NavBarLinkFreelancers,
  NavBarLinkLogin,
  NavBarLinkSignup,
  NavBarLinkTitle,
} from './navbar-link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(8),
  },
  icon: {
    marginRight: theme.spacing(3),
  },
  navBar: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  linkSpacing: {
    margin: theme.spacing(0.5, 6, 0, 0),
  },
  navBarRight: {
    marginLeft: 'auto',
  },
  spacingLeft: {
    marginLeft: theme.spacing(2),
  },
  ruler: {
    marginBottom: theme.spacing(3),
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Ruler className={classes.ruler} />
      <div className={classes.root}>
        <AppBar position='static' className={classes.navBar}>
          <Toolbar>
            <NavBarIcon className={classes.icon} height={40} width={40} />
            <NavBarLinkTitle className={classes.title} />
            <NavBarLinkAbout className={classes.linkSpacing} />
            <NavBarLinkFreelancers className={classes.linkSpacing} />
            <NavBarLinkEmployers className={classes.linkSpacing} />
            <div className={classes.navBarRight} />
            <NavBarLinkLogin className={classes.spacingLeft} />
            <NavBarLinkSignup className={classes.spacingLeft} />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar;
