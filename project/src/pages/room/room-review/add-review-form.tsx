/* eslint-disable no-console */
import {useForm, SubmitHandler} from 'react-hook-form';
import {useEffect} from 'react';
//import {memo} from 'react';
import { useParams } from 'react-router';

import {NewComment} from '../../../types/comment';

import {fetchPostCommentAction} from '../../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setCommentSubmutAction} from '../../../store/action';

const COMMENT_LENGTH = {
  min: 50,
  max: 300
};

function AddReviewForm(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('add-rev');
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isCommentSubmitSuccessful = useAppSelector((state) => state.isCommentSubmitSuccessful);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: {isSubmitSuccessful, isValid}
  } = useForm<NewComment>({
    mode: 'onChange'
  });

  useEffect(() => {
    if (isSubmitSuccessful && isCommentSubmitSuccessful) {
      reset();
      dispatch(setCommentSubmutAction(false));
    }
  }, [formState]);

  const onSubmit: SubmitHandler<NewComment> = (data) => {
    dispatch(fetchPostCommentAction([data, id]));
  };

  return (
    <form
      className="reviews__form form"
      // eslint академии ошибочно выдает предупреждение()
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="reviews__label form__label" htmlFor="review"></label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" value="5" id="5-stars" type="radio" {...register('rating', { required: true,})}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" value="4" id="4-stars" type="radio" {...register('rating', { required: true,})}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" value="3" id="3-stars" type="radio" {...register('rating', { required: true,})}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" value="2" id="2-stars" type="radio" {...register('rating', { required: true,})}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" value="1" id="1-star" type="radio" {...register('rating', { required: true,})}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={COMMENT_LENGTH.min}
        {...register('comment', {
          required: true,
          minLength: COMMENT_LENGTH.min,
          maxLength: COMMENT_LENGTH.max,
        })}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> {COMMENT_LENGTH.min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          disabled={!isValid}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default AddReviewForm;
