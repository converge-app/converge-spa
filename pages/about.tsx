import {NextPage} from 'next';
import React from 'react';
import InfoPage from '../components/content/info-page/info-page';
import Layout from '../components/layouts/layout';

const AboutPage: NextPage = () => {
    const content = require('../articles/about.md').default;
    return (
        <Layout>
            <InfoPage headline={'About'} content={content}/>
        </Layout>
    );
};

export default AboutPage;
