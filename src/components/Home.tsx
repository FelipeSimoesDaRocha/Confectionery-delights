import Image from 'next/image';
import { useState } from 'react';

import heroIcon from '../assets/images/hero-icon.png';
import heroSlider1 from '../assets/images/hero-slider-1.jpg';
import heroSlider2 from '../assets/images/hero-slider-2.jpg';
import heroSlider3 from '../assets/images/hero-slider-3.jpg';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const heroSliderData = [
    {
      id: 1,
      imgSrc: heroSlider1,
      title: 'Delicias Da\nConfeitaria',
      subtitle: 'Doces, Bolos e Salgados',
    },
    {
      id: 2,
      imgSrc: heroSlider2,
      title: 'Delicias Da\nConfeitaria',
      subtitle: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      id: 3,
      imgSrc: heroSlider3,
      title: 'Delicias Da\nConfeitaria',
      subtitle: 'Come with family & feel the joy of mouthwatering food',
    },
  ];

  return (
    <section className="hero text-center" aria-label="home" id="Home">
      <ul className="hero-slider" data-hero-slider>
        {heroSliderData.map((item, index) => (
          <li
            key={item.id || index}
            className={activeSlide === index + 1 ? 'slider-item active' : 'slider-item'}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <Image src={item.imgSrc} width="1880" height="950" alt="" className="img-cover" />
            </div>

            <h1 className="display-1 hero-title slider-reveal">{item.title}</h1>

            <p className="body-2 hero-text slider-reveal">{item.subtitle}</p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">Confira o cardápio</span>

              <span className="text text-2" aria-hidden="true">
                Confira o cardápio
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
        onClick={() => setActiveSlide(activeSlide === 1 ? heroSliderData.length : activeSlide - 1)}
      >
        <p style={{ transform: 'translateY(5%) rotate(320deg)' }}>&#x3c;</p>
      </button>

      <button
        className="slider-btn next"
        aria-label="slide to next"
        data-next-btn
        onClick={() => setActiveSlide(activeSlide === heroSliderData.length ? 1 : activeSlide + 1)}
      >
        <p style={{ transform: 'translateY(5%) rotate(320deg)' }}>&#x3e;</p>
      </button>

      <a href="#" className="hero-btn has-after">
        <Image src={heroIcon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Fazer pedido</span>
      </a>
    </section>
  );
};

export default Home;
