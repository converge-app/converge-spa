import { makeStyles } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  public render() {
    const styles = {
      body: {
        margin: 0,
      },
    };

    const {classes} =  

    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default RootDocument;
