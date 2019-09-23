import Head from 'next/head';
import React from 'react';
import Header from '../NavBar';

interface LayoutProps {
  title?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title = 'Converge',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <Header></Header>
    </header>

    {children}

    {/*TODO: Add footer */}
  </div>
);

export default Layout;
