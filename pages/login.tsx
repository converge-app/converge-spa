import {NextPage} from 'next';
import React from 'react';
import Layout from '../components/layouts/layout';
import {LoginContent} from '../components/content/login/login.content';

const LoginPage: NextPage = () => {
    return <Layout>
        <LoginContent/>
    </Layout>;
};

export default LoginPage;
