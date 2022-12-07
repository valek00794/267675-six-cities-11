import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import {Route, Routes, MemoryRouter} from 'react-router-dom';

import HistoryRouter from '../../components/history-route/history-route';
import Main from './main';
import {fakeRoomInfo, makeFakeNearbyOffers, makeFakeOffers, makeFakeComments} from '../../utils/mocks';
import {AuthorizationStatus, defaultCityInfo} from '../../consts';

const mockStore = configureMockStore([thunk]);

const fakeOffers = [{...fakeRoomInfo, id: 1, city: {...defaultCityInfo}}, {...fakeRoomInfo, id: 2, city: {...defaultCityInfo}}, {...fakeRoomInfo, id: 3, city: {...defaultCityInfo}}];
const fakeComments = makeFakeComments();
const fakeNearbyOffers = makeFakeNearbyOffers();

describe('Page: Main', () => {
  it('1. should render correctly data received and offers is empty', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authStatus: AuthorizationStatus.NoAuth},
      DATA: {
        offers: [],
        isOffersDataLoading: false,
      },
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Main />
        </HistoryRouter>
      </Provider>

    );
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });

  it('2. should render correctly data received', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authStatus: AuthorizationStatus.NoAuth},
      DATA: {
        offers: fakeOffers,
        isOffersDataLoading: false,
      },
    });
    const cities = fakeOffers.map((offer) => offer.city.name);
    const city = cities[Math.floor(Math.random() * cities.length)];
    const testLink = `/${city}`;
    history.push(testLink);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[testLink]}>
          <Routes>
            <Route path={testLink} element={<Main />} />
          </Routes>
        </MemoryRouter>
      </Provider>

    );
    expect(screen.getByText(new RegExp(`${fakeOffers.length} places to stay in ${city}`, 'i'))).toBeInTheDocument();
  });
});
