import {memo} from 'react';

import Footer from '../../components/footer/footer';

import './loading-style.css';

function LoadingScreen(): JSX.Element {
  return (
    <>
      <div className='loading'>
        <div>Loading</div>
      </div>
      <Footer />
    </>
  );
}

export default memo(LoadingScreen);
