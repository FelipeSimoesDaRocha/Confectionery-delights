import { useEffect } from 'react';
import './styles.module.css';

const Loading = () => {
  useEffect(() => {
    const preloader: Element | null = document.querySelector('[data-preaload]');

    if (preloader) {
      preloader.classList.add('loaded');
    }
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="preload" data-preaload>
      <div className="circle"></div>
      <p className="text">Confeitaria</p>
    </div>
  );
};

export default Loading;
