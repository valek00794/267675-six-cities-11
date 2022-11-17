//import {memo} from 'react';
import {useParams} from 'react-router';
import {useEffect} from 'react';

import AddReviewForm from './add-review-form';
import Review from './review';
import Spinner from '../../../pages/loading-screen/spinner';

import {useAppSelector, useAppDispatch} from '../../../hooks';
import {fetchCommentsAction} from '../../../store/api-actions';

import {AuthorizationStatus} from '../../../consts';

function RoomReviews(): JSX.Element {
  const {id} = useParams();
  // eslint-disable-next-line no-console
  console.log('room-reviews');
  const serverComments = useAppSelector((state) => state.serverComments);
  const isCommentsDataLoading = useAppSelector((state) => state.isCommentsDataLoading);
  const isCommentSubmitSuccessful = useAppSelector((state) => state.isCommentSubmitSuccessful);
  const lengthCommentsBlock = serverComments.length;
  const authStatus = useAppSelector((state) => state.authStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id, isCommentSubmitSuccessful]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{serverComments.length}</span></h2>
      <ul className="reviews__list">
        {isCommentsDataLoading && <Spinner length={lengthCommentsBlock}/>}
        {serverComments.map((comment) => <li className="reviews__item" key={comment.id}><Review comment={comment}/></li>)}
      </ul>
      {authStatus === AuthorizationStatus.Auth &&
      <AddReviewForm />}
    </section>
  );
}

export default RoomReviews;
