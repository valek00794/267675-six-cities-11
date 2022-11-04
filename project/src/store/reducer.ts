import {createReducer} from '@reduxjs/toolkit';

import {changeSelectedCityAction, getOffersAction} from './action';

import {Offer} from '../types/offers';

type State = {
  city: string;
  offers: Offer[];
}
const initialState: State = {
  city:  'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getOffersAction, (state, action) => {
      state.offers = action.payload.offers;
    });
});

