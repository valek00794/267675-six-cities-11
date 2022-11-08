import {Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import Header from '../../components/header/header';

import {AppRoute, AuthorizationStatus} from '../../consts';

function App(): JSX.Element {
  return (

    <Routes>
      <Route path={AppRoute.Main} element={<Header />} >
        <Route index element={<Main />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path={AppRoute.Login} element={<Login />} />
    </Routes>

  );
}

export default App;
