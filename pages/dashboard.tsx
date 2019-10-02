import { NextPage } from 'next';
import React from 'react';
import DashboardContent from '../components/content/dashboard/dashboard.content';
import DashboardLayout from '../components/layouts/dashboard.layout';

const DashboardPage: NextPage = () => {
  return <DashboardLayout>
    <DashboardContent/>
  </DashboardLayout>;
};

export default DashboardPage;
