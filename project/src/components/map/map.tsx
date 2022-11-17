import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {memo} from 'react';

import useMap from '../../hooks/useMap';

import {MapStyle} from '../../consts';
import {Offer} from '../../types/offers';

const URL_MARKER_DEFAULT = '../../img/pin.svg';
const URL_MARKER_CURRENT = '../../img/pin-active.svg';

type MapProps = {
    selectedCard?: number;
    mapStyle: MapStyle;
    offers: Offer[];
  }

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({selectedCard, mapStyle, offers}: MapProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('map');
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedCard !== undefined && offer.id === selectedCard && mapStyle === MapStyle.Main
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedCard, mapStyle]);

  return <div className={mapStyle} ref={mapRef}></div>;
}

export default memo(Map);
