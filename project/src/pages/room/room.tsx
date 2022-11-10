import { useParams } from 'react-router';
import { useEffect} from 'react';

//import RoomReview from '../../components/room-review/room-review';
//import Map from '../../components/map/map';
//import PlaceCard from '../../components/place-card/place-card';

//import {MapStyle} from '../../consts';
import {useAppSelector} from '../../hooks';

import {fetchOfferAction} from '../../store/api-actions';
import {store} from '../../store';

function Room(): JSX.Element {
  const {id} = useParams();

  useEffect(() => {
    store.dispatch(fetchOfferAction(id));
  }, [id]);


  return (
    <main className="page__main page__main--property">
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {'[eq'}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Room;
