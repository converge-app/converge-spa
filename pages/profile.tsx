import { NextPage } from "next";
import React from "react";
import DashboardLayout from "../components/layouts/dashboard.layout";
import ProfileContent from "../components/content/profile/profile.content";

const ProfilePage: NextPage = () => {
  return (
    <DashboardLayout>
      <ProfileContent></ProfileContent>
    </DashboardLayout>
  );
};

export default ProfilePage;
