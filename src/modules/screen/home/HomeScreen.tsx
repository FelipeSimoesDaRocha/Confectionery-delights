// Styles
import * as S from './Home.styles';

// Components
import { Layout } from 'components/layout';

const HomeScreen = () => {
  return (
    <S.Container>
      {/* <div className="preload" data-preaload>
        <div className="circle"></div>
        <p className="text">Grilli</p>
      </div> */}
      <Layout />
      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
        {/* <ion-icon name="chevron-up" aria-hidden="true"></ion-icon> */}gg
      </a>
    </S.Container>
  );
};

export default HomeScreen;
