import { NextPage } from 'next';
import DashboardLayout from '../components/layouts/dashboard.layout';
import AccountContent from '../components/content/account/account.content';

const AccountPage: NextPage = () => {
  return (
    <DashboardLayout>
      <AccountContent></AccountContent>
    </DashboardLayout>
  );
};

export default AccountPage;
