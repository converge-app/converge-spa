import {NextPage} from 'next';
import React from 'react';
import CreateProjectContent from '../../components/content/create-project/create.project.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';

const CreateProjectPage: NextPage = () => {
    return <DashboardLayout>
        <CreateProjectContent/>
    </DashboardLayout>;
};

export default CreateProjectPage;
