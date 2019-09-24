import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBarLink from '../styles/buttons/nav-bar-link';
import ConvergeIcon from './converge-icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(8),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 24,
  },
  icon: {
    marginRight: theme.spacing(3),
  },
  navBar: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  link: {
    margin: theme.spacing(0.5, 6, 0, 0),
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  navBarLeft: {},
  navBarRight: {
    marginLeft: 'auto',
  },
  spacingLeft: {
    marginLeft: theme.spacing(2),
  },
  ruler: {
    background: theme.palette.primary.main,
    border: 'none',
    padding: 0,
    marginTop: 0,
    height: 5,
    marginBottom: theme.spacing(3),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <hr className={classes.ruler}></hr>
      <div className={classes.root}>
        <AppBar position='static' className={classes.navBar}>
          <Toolbar>
            <div className={classes.icon}>
              <ConvergeIcon height={40} width={40}></ConvergeIcon>
            </div>
            <NavBarLink href='/'>
              <Typography
                variant='h5'
                className={classes.title}
                color='textPrimary'
                noWrap
              >
                Converge
              </Typography>
            </NavBarLink>

            <NavBarLink href='/about'>
              <Typography
                variant='body1'
                className={classes.link}
                color='textPrimary'
                noWrap
              >
                About
              </Typography>
            </NavBarLink>

            <NavBarLink href='/freelancers'>
              <Typography
                variant='body1'
                className={classes.link}
                color='textPrimary'
                noWrap
              >
                Freelancers
              </Typography>
            </NavBarLink>
            <NavBarLink href='/employers'>
              <Typography
                variant='body1'
                className={classes.link}
                color='textPrimary'
                noWrap
              >
                Employers
              </Typography>
            </NavBarLink>
            <div className={classes.navBarRight}></div>
            <NavBarLink href='/login'>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.spacingLeft}
              >
                Login
              </Button>
            </NavBarLink>

            <NavBarLink href='/signup'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.spacingLeft}
              >
                Signup
              </Button>
            </NavBarLink>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
