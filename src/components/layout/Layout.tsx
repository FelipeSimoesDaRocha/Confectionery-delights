import * as S from './Layout.styles';

// Components
import { Content } from 'components/content';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Content />
      <Footer />
    </S.Container>
  );
};

export default Layout;
