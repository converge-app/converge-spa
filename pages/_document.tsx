import {ServerStyleSheets} from '@material-ui/styles';
import Document from 'next/document';
import React from 'react';
import {HtmlRoot} from '../components/layouts/html-root';

class RootDocument extends Document {
  public render() {
    return (
        <HtmlRoot/>
    );
  }
}

RootDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props}/>),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default RootDocument;
