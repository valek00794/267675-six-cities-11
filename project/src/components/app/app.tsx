import {Route, Routes} from 'react-router-dom';

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
  const {authStatus, isOffersDataLoading} = useAppSelector((state) => state);
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
      <Route path={AppRoute.Main} element={<Header />} >
        <Route index element={<Main />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={authStatus}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.Error} element={<NotFound />} />
      </Route>
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>
  );
}

export default App;
