import { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    const preloader = document.querySelector('[data-preload]');
    preloader?.classList.add('loaded');
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="preload" data-preload>
      <div className="circle"></div>
      <p className="text">Confeitaria</p>
    </div>
  );
};

export default Loading;
