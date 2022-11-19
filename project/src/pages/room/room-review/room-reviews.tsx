//import {memo} from 'react';
import AddReviewForm from './add-review-form';
import Review from './review';

import {useAppSelector} from '../../../hooks';

import {AuthorizationStatus} from '../../../consts';

function RoomReviews(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('room-reviews');
  const serverComments = useAppSelector((state) => state.serverComments);
  const authStatus = useAppSelector((state) => state.authStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{serverComments.length}</span></h2>
      <ul className="reviews__list">
        {serverComments.map((comment) => <li className="reviews__item" key={comment.id}><Review comment={comment}/></li>)}
      </ul>
      {authStatus === AuthorizationStatus.Auth &&
      <AddReviewForm />}
    </section>
  );
}

export default RoomReviews;
