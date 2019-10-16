import { NextPage } from 'next';
import React from 'react';
import ProfileContent from '../../components/content/profile/getProfile/profile.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';
import { services } from '../../services';

const ProfilePage: NextPage = () => {
  return (
    <DashboardLayout>
      <ProfileContent
        profileId={services.authentication.getId()}
      ></ProfileContent>
    </DashboardLayout>
  );
};

export default ProfilePage;
