import {makeStyles} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import NavBar from './nav-bar/nav-bar';

interface ILayoutProps {
    title?: string;
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
    header: {

    },
    main: {
        flexGrow: 1,
        display: 'flex',
    },
}));

const Layout: React.FunctionComponent<ILayoutProps> = ({
                                                           children,
                                                           title = 'Converge',
                                                       }) => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={classes.content}>
                <header className={classes.header}>
                    <NavBar/>
                </header>
                <main className={classes.main}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
