// Next
import { NextPage } from 'next';
import { Fragment } from 'react';

// Components
import { Content } from 'components/content';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

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
