import {createReducer} from '@reduxjs/toolkit';

import {
  changeSelectedCityAction,
  pickOffersByCityAction,
  sortByRatingAction,
  sortByPriceLowToHighAction,
  sortByPriceHighToLowAction,
  loadOffersAction,
  setOffersDataLoadingStatusAction,
  requireAuthorizationAction
} from './action';

import {Offer} from '../types/offers';
import {AuthorizationStatus} from '../consts';

type State = {
  city: string;
  offers: Offer[];
  serverOffers: Offer[];
  authStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}
const initialState: State = {
  city: 'Paris',
  offers: [],
  serverOffers: [],
  authStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(pickOffersByCityAction, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(sortByRatingAction, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(sortByPriceLowToHighAction, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(sortByPriceHighToLowAction, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.serverOffers = action.payload.serverOffers;
    })
    .addCase(setOffersDataLoadingStatusAction, (state, action) => {
      state.isOffersDataLoading = action.payload.isOffersDataLoading;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authStatus = action.payload.authStatus;
    });
});


