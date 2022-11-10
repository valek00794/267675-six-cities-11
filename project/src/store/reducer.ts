import {createReducer} from '@reduxjs/toolkit';

import {
  changeSelectedCityAction,
  pickOffersByCityAction,
  sortByRatingAction,
  sortByPriceLowToHighAction,
  sortByPriceHighToLowAction,
  loadOffersAction,
  setOffersDataLoadingStatusAction,
  requireAuthorizationAction,
  setAuthUserAction,
} from './action';

import {Offer} from '../types/offers';
import {AuthorizationStatus, AppRoute} from '../consts';

type State = {
  city: string;
  offers: Offer[];
  serverOffers: Offer[];
  serverOffer: Offer | object;
  authStatus: AuthorizationStatus;
  authUser?: string;
  isOffersDataLoading: boolean;
  toRoute: AppRoute;
}
const initialState: State = {
  city: 'Paris',
  offers: [],
  serverOffers: [],
  serverOffer: {},
  authStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  toRoute: AppRoute.Login,
  authUser: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(pickOffersByCityAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortByRatingAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortByPriceLowToHighAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortByPriceHighToLowAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.serverOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatusAction, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setAuthUserAction, (state, action) => {
      state.authUser = action.payload;
    });
});


