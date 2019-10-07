import { NextPage } from "next";
import React from "react";

import DashboardLayout from "../components/layouts/dashboard.layout";
import CategoriesContent from "../components/content/categories/categories.content";

const CategoriesPage: NextPage = () => {
  return (
    <DashboardLayout>
      <CategoriesContent></CategoriesContent>
    </DashboardLayout>
  );
};

export default CategoriesPage;
