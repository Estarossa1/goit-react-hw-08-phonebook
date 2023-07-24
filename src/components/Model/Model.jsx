import Header from 'components/Header/Header';
import Footer from '../Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'redux/auth/useAuth';

const Model = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Header />
      <div>{children}</div>
      {!isLoggedIn && <Footer />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Model;
