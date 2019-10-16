import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import ProfileContent from '../../components/content/profile/getProfile/profile.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { profileId } = router.query;

  if (profileId && typeof profileId === 'string') {
    return (
      <DashboardLayout>
        <ProfileContent profileId={profileId}></ProfileContent>
      </DashboardLayout>
    );
  } else {
    return <DashboardLayout>Spinner</DashboardLayout>;
  }
};

export default ProfilePage;
