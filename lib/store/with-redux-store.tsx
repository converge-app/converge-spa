import React from 'react';
import { initializeStore } from './store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__: string = '__NEXT_REDUX_STORE__';

const getOrCreateStore = (initialState: any = null) => {
  if (isServer) {
    return initializeStore(initialState);
  }

  // @ts-ignore
  if (!window[__NEXT_REDUX_STORE__]) {
    // @ts-ignore
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  // @ts-ignore
  return window[__NEXT_REDUX_STORE__];
};

export default (App: any) => {
  return class AppWithRedux extends React.Component {
    public static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore();

      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    public reduxStore: any;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
