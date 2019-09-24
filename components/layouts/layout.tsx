import Head from 'next/head';
import React from 'react';
import NavBar from '../nav-bar';

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
    </Head>
    <header>
      <NavBar></NavBar>
    </header>

    {children}

    {/*TODO: Add footer */}
  </div>
);

export default Layout;
