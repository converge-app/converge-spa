import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/More';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, { useState } from 'react';
import { Ruler } from '../ruler';
import { DashboardNavBarLinkTitle } from '../nav-bar/navbar-link';
import Router from 'next/router';

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
    marginBottom: theme.spacing(3),
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginLeft: theme.spacing(3),
  },
}));

export const DashboardNavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem
        onClick={() => Router.push('/account', '/account', { shallow: true })}
      >
        Account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon></MailIcon>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon></NotificationsIcon>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color='inherit'>
          <AccountCircle></AccountCircle>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Ruler className={classes.ruler} />
      <div className={classes.root}>
        <AppBar position='static' className={classes.navBar}>
          <Toolbar>
            <DashboardNavBarLinkTitle className={classes.title} />
            <div className={classes.navBarRight} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label='show 4 new mails' color='primary'>
                <MailIcon />
              </IconButton>
              <IconButton
                aria-label='show 17 new notifications'
                color='primary'
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                href={'/profile'}
                edge='end'
                aria-label='account of current user'
                aria-haspopup='true'
                color='primary'
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                edge='end'
                className={classes.menuButton}
                color='primary'
                aria-label='open drawer'
                onClick={handleProfileMenuOpen}
                aria-control={menuId}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-control={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='primary'
              >
                <MoreIcon></MoreIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default DashboardNavBar;
