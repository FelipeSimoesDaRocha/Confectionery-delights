import { NextPage } from 'next';
import { Fragment } from 'react';

// Components
import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Home;
