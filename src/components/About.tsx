import Image from 'next/image';

import shape3 from '../assets/images/shape-3.png';
import aboutAbsImage from '../assets/images/gg.jpg';
import aboutBanner from '../assets/images/about-banner.jpg';

const About = () => {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Minha história
          </p>

          <h2 className="headline-1 section-title">Cada sabor conta uma história</h2>

          <p className="section-text">
            Eu trabalho com ingredientes frescos e de alta qualidade para garantir que cada produto seja feito com
            perfeição. Então, não importa o que você esteja procurando, eu estou aqui para ajudá-lo a tornar seus
            eventos ainda mais especiais.
          </p>

          <div className="contact-label">Reserve por chamada</div>

          <a href="tel:+554791075411" className="body-1 contact-number hover-underline">
            +55 47 9107-5411
          </a>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">consulte Mais informação</span>

            <span className="text text-2" aria-hidden="true">
              consulte Mais informação
            </span>
          </a>
        </div>

        <figure className="about-banner">
          <Image
            src={aboutBanner}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />

          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <Image src={aboutAbsImage} width="285" height="285" loading="lazy" alt="" className="w-100" />
          </div>
        </figure>

        <Image src={shape3} width="197" height="194" loading="lazy" alt="" className="shape" />
      </div>
    </section>
  );
};

export default About;
