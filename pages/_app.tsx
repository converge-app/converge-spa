import { CssBaseline } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import theme from '../components/styles/theme/theme';

export default class RootApp extends App {
  public componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Converge</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
