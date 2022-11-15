import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('404');
  return (
    <>
      <section className="container" style={{textAlign: 'center'}}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
