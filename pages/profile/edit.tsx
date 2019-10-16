import { NextPage } from 'next';
import EditProfileContent from '../../components/content/profile/editProfile/edit.profile.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';
import { services } from '../../services';

const EditProfilePage: NextPage = () => {
  const userId = services.authentication.getId();

  return (
    <DashboardLayout>
      <EditProfileContent userId={userId}></EditProfileContent>
    </DashboardLayout>
  );
};

export default EditProfilePage;
