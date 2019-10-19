import { CssBaseline } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import theme from '../components/styles/theme/theme';
import withReduxStore from '../lib/store/with-redux-store';

class RootApp extends App {
  public componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    // @ts-ignore
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Converge</title>

          <script src='https://js.stripe.com/v3/'></script>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(RootApp);
