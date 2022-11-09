import { Link } from 'react-router-dom';

import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
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
