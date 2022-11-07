import {Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import Header from '../../components/header/header';

import {Offer} from '../../types/offers';
import {AppRoute, AuthorizationStatus} from '../../consts';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {
  return (

    <Routes>
      <Route path={AppRoute.Main} element={<Header />} >
        <Route index element={<Main />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offers}/>
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
