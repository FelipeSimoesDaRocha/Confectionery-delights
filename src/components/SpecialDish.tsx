import Image from 'next/image';

import badge1 from '../assets/images/badge-1.png';
import shape4 from '../assets/images/shape-4.png';
import shape9 from '../assets/images/shape-9.png';
import specialDishBanner from '../assets/images/special-dish-banner.jpg';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <Image
          src={specialDishBanner}
          width="940"
          height="900"
          loading="lazy"
          alt="special dish"
          className="img-cover"
        />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <Image src={badge1} width="28" height="41" loading="lazy" alt="badge" className="abs-img" />

          <p className="section-subtitle label-2">PRATO ESPECIAL</p>

          <h2 className="headline-1 section-title">Lasanha de carne</h2>

          <p className="section-text">
            A lasanha de carne com requeijão vai ser sucesso entre seus amigos no próximo encontro. Pode apostar, não
            vai sobrar nada, e ainda vão repetir para você repetir a dose em outra oportunidade.
          </p>

          <div className="wrapper">
            <del className="del body-3">$60.00</del>
            <span className="span body-1">$40.00</span>
          </div>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">Ver todos menu</span>

            <span className="text text-2" aria-hidden="true">
              Ver todos menu
            </span>
          </a>
        </div>
      </div>

      <Image src={shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />

      <Image src={shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
