import { useEffect } from 'react';

import * as S from './Loading.styles';

const Loading = () => {
  useEffect(() => {
    const preloader: Element | null = document.querySelector('[data-preaload]');
    
    if (preloader) {
      preloader.classList.add('loaded');
    }
    document.body.classList.add('loaded');
  }, []);


  return (
    <S.Component>
      <div className="preload" data-preaload>
        <div className="circle"></div>
        <p className="text">Confeitaria</p>
      </div>
    </S.Component>
  );
};

export default Loading;
