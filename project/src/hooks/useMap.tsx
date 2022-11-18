import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {useParams} from 'react-router';

import {City} from '../types/offers';
import {Offer} from '../types/offers';
import {defaultCityCoordinates} from '../consts';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offers: Offer[]
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const {city} = useParams();
  const cityCoordinates : City = offers.find((offer) => city === offer.city.name)?.city || defaultCityCoordinates;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: [cityCoordinates.location.latitude, cityCoordinates.location.longitude],
        zoom: cityCoordinates.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView([cityCoordinates.location.latitude, cityCoordinates.location.longitude], cityCoordinates.location.zoom);
  }, [mapRef, map, city, cityCoordinates]);

  return map;
}

export default useMap;
