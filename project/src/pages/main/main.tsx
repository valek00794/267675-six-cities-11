import {useRef, useState} from 'react';

import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Sort from '../../components/sort/sort';
import OfferList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';

import {useAppSelector} from '../../hooks';
import {MapStyle, SortType} from '../../consts';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [selectedCard, setActiveCard] = useState(0);
  const sortRef = useRef(SortType.Popular);
  const sortUlState = useState(false);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList sortRef={sortRef} sortUlState={sortUlState} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <Sort sortRef={sortRef} sortUlState={sortUlState}/>
              <OfferList setActiveCard={setActiveCard} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                <Map
                  selectedCard={selectedCard}
                  mapStyle={MapStyle.Main}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
