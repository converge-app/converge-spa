import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Submitting from '../content/submitting/submitting';
import DashboardNavBar from './dashboard-nav-bar/dashboard.nav-bar';

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
  submitting: {
    display: 'absolute',
    position: 'sticky',
    left: 0,
    bottom: 0,
    width: '100%',
  },
}));

const DashboardLayout: React.FunctionComponent<ILayoutProps> = ({
  children,
  title = 'Converge | Dashboard',
}) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.content}>
        <header className={classes.header}>
          <DashboardNavBar />
        </header>
        <main className={classes.main}>{children}</main>
        <div className={classes.submitting}>
          <Submitting></Submitting>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
