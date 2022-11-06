export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapStyle {
  Main = 'Main__map',
  Room = 'Room__map',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export const defaultCityCoordinates = {
  'name': 'Paris',
  'location': {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  },
} as const;
