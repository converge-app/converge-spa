import { AppBar, Badge, IconButton, Toolbar } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { Ruler } from '../ruler';
import { DashboardNavBarLinkTitle } from '../nav-bar/navbar-link';

const useStyles = makeStyles((theme) => ({
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

export const DashboardNavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <Ruler className={classes.ruler} />
      <div className={classes.root}>
        <AppBar position='static' className={classes.navBar}>
          <Toolbar>
            <DashboardNavBarLinkTitle className={classes.title} />
            <div className={classes.navBarRight} />
            <IconButton href="chat" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label='show 17 new notifications' color='inherit'>
              <Badge badgeContent={17} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              href={'/profile'}
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default DashboardNavBar;
