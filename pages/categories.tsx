import { NextPage } from 'next';
import React from 'react';

import DashboardLayout from '../components/layouts/dashboard.layout';
import CategoryContent from '../components/content/categories/category.content';

const CategoriesPage: NextPage = () => {
  return (
    <DashboardLayout>
      <CategoryContent></CategoryContent>
    </DashboardLayout>
  );
};

export default CategoriesPage;
