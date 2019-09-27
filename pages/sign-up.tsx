import { NextPage } from 'next';
import React from 'react';
import {SignUpContent} from '../components/content/sign-up/sign-up.content';
import Layout from '../components/layouts/layout';

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <SignUpContent/>
    </Layout>
  );
};

export default SignUpPage;
