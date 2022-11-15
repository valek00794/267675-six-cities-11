import {memo} from 'react';

import Footer from '../../components/footer/footer';

import './loading-style.css';

function LoadingScreen(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('loading');
  return (
    <>
      <div className='loading'>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default memo(LoadingScreen);
