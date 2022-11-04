import { createAction} from '@reduxjs/toolkit';

import {offers} from '../mocks/offers';

export const changeSelectedCityAction = createAction('CHANGE_SELECTED_CITY', (city: string) => ({
  payload: {
    city,
  },
}));

export const getOffersAction = createAction('GET_OFFERS', () => ({
  payload: {
    offers,
  },
}));

/*
export const pickOffersByCityAction = createAction('PICK_OFFERS_BY_CITY', (city: string, offers: Offer[]) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city);
  return {
    payload: {
      offersByCity,
    },
  };
});
*/


