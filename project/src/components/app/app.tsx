import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Header from '../../components/header/header';
import HistoryRouter from '../../components/history-route/history-route';
import browserHistory from '../../browser-history';


import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <Routes>
        <Route path={AppRoute.Main} element={<Header />} >
          <Route index element={<Main />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </HistoryRouter>

  );
}

export default App;
