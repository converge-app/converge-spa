import {Head, Main, NextScript} from 'next/document';
import React from 'react';
import theme from '../styles/theme/theme';

export function HtmlRoot() {
    return (
        <html lang='en'>
        <Head>
            <meta charSet='utf-8'/>
            <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
            />
            <meta name='theme-color' content={theme.palette.primary.main}/>
            <link
                href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
                rel='stylesheet'
            />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </html>
    );
}
