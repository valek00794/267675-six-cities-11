import {useEffect} from 'react';

import Footer from '../../components/footer/footer';
import FavoriteCard from '../../components/favorite-card/favorite-card';

import {fetchFavoriteOffersAction} from '../../store/api-actions';

import {useAppSelector, useAppDispatch} from '../../hooks';
import {getFavoriteOffers} from '../../store/app-data/selectors';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const citiesFavoriteOffers = new Set(favoriteOffers.map((offer) => offer.city.name));

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, []);

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(citiesFavoriteOffers).map((city) =>(
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((offer) =>city === offer.city.name ? <FavoriteCard key={offer.id} offer={offer}/> : '' )}
                  </div>
                </li>
              )
              )}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
