import { NextPage } from 'next';
import React from 'react';
import {ForgotPasswordContent} from '../components/content/forgot-password/forgot-password.content';
import Layout from '../components/layouts/layout';

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <ForgotPasswordContent/>
    </Layout>
  );
};

export default SignUpPage;
