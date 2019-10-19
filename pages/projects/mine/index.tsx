import { NextPage } from 'next';
import MyProjectsContent from '../../../components/content/project/mine/projects.mine.content';
import DashboardLayout from '../../../components/layouts/dashboard.layout';

const MyProjects: NextPage = () => {
  return (
    <DashboardLayout>
      <MyProjectsContent></MyProjectsContent>
    </DashboardLayout>
  );
};

export default MyProjects;
