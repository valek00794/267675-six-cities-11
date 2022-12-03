import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../consts';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {authStatus: AuthorizationStatus.Unknown, authUser: ''};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authStatus: AuthorizationStatus.Unknown});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type }))
        .toEqual({authStatus: AuthorizationStatus.Auth, authUser: ''});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({authStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type }))
        .toEqual({authStatus: AuthorizationStatus.Auth, authUser: ''});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({authStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({authStatus: AuthorizationStatus.NoAuth});
    });
  });
});
