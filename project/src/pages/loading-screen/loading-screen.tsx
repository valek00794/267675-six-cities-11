import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './loading-style.css';

function LoadingScreen(): JSX.Element {
  return (
    <>
      <Header />
      <div className='loading'>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default LoadingScreen;
