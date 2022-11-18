import {Route, Routes, Navigate} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import Header from '../../components/header/header';

import {useAppSelector} from '../../hooks';

import {AppRoute, AuthorizationStatus} from '../../consts';

function App(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('app');
  const authStatus = useAppSelector((state) => state.authStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  if (isOffersDataLoading || authStatus === AuthorizationStatus.Unknown) {
    return (
      <>
        <Header />
        <LoadingScreen />
      </>

    );
  }
  return (
    <Routes>
      <Route path={AppRoute.Default} element={<Header />} >
        <Route path={AppRoute.Default} element={<Navigate to="/Paris" />} />
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Error} element={<NotFound />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={authStatus}>
            <Favorites />
          </PrivateRoute>
        }
        />
      </Route>
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>
  );
}

export default App;
