import {makeStyles} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {AlertComponent} from './alert.component';
import NavBar from './nav-bar/nav-bar';

interface ILayoutProps {
  children: any;
  title?: string;
  alert?: any;
}

const useStyles = makeStyles(() => ({
  background: {
    minHeight: '100vh !important',
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh !important',
  },
  header: {},
  main: {
    flexGrow: 1,
    display: 'flex',
  },
}));

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  title = 'Converge',
  alert,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.content}>
        <header className={classes.header}>
          <NavBar />
        </header>
        <main className={classes.main}>{children}</main>
        <AlertComponent alert={alert} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { alert } = state;
  return {
    alert,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
)(Layout);
