import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/layouts/layout';
import Main from '../components/Maincontent';
import Header from '../components/NavBar';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Main></Main>
    </Layout>
  );
};

export default IndexPage;
