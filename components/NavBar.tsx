import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ConvergeIcon from './converge-icon';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: 20,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.icon}>
            <ConvergeIcon height={40} width={40}></ConvergeIcon>
          </div>
          <Typography variant='h6' className={classes.title}>
            Converge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
