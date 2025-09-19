import TopBar from '@/components/TopBar';
// TODO: import useUserContext from mediastore mfe
import { useUserContext } from 'mediastore/contextHooks';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
