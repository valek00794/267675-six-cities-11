import {useRef, useState} from 'react';
import {useParams} from 'react-router';
import classnames from 'classnames';

import CitiesList from '../../components/cities-list/cities-list';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import NotFound from '../../pages/not-found/not-found';

import {useAppSelector} from '../../hooks';
import {cities, SortType, MapStyle} from '../../consts';

import {getSortOffers} from '../../store/app-data/selectors';


function Main(): JSX.Element {
  const [selectedCard, setActiveCard] = useState(0);
  const sortRef = useRef(SortType.Popular);
  const [sortUlState, setUlState] = useState(false);
  const {city} = useParams();
  const offers = useAppSelector((state) => getSortOffers(state, city, sortRef.current));


  if (city && !cities.includes(city)) {
    return <NotFound />;
  }

  return (
    <div className="page page--gray page--main">
      <main className={classnames(
        'page__main page__main--index',
        {'page__main--index-empty': offers.length === 0}
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList sortRef={sortRef} setUlState={setUlState} />
        <div className="cities">
          {offers.length === 0 && <MainEmpty />}
          {offers.length !== 0 &&
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length !== 0 && city ? `${offers.length} places to stay in ${city}` : 'No places to stay available'} </b>
              <Sort sort={sortRef.current} sortRef={sortRef} sortUlState={sortUlState} setUlState={setUlState}/>
              <OffersList sort={sortRef.current} setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                <Map
                  offers={offers}
                  selectedCard={selectedCard}
                  mapStyle={MapStyle.Main}
                />
              </section>
            </div>
          </div>}
        </div>
      </main>
    </div>
  );
}

export default Main;
