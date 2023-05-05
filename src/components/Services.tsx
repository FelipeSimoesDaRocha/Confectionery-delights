import Image from 'next/image';

import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';

import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

const Services = () => {
  const services = [
    {
      name: 'Doces',
      image: service3,
    },
    {
      name: 'Bolos',
      image: service1,
    },
    {
      name: 'Salgados',
      image: service2,
    },
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service" id="service">
      <div className="container">
        <p className="section-subtitle text-center label-2">Sabores para a realeza</p>
        <h2 className="headline-1 section-title">Oferecemos Top Notch</h2>
        <p className="section-text">Aqui, você encontrará uma variedade de delícias feitas com muito amor e carinho.</p>

        <ul className="grid-list">
          {services.map(service => (
            <li key={service.name}>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ width: 285, height: 336 }}>
                    <Image
                      src={service.image}
                      width="285"
                      height="336"
                      loading="lazy"
                      alt={service.name}
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">{service.name}</a>
                  </h3>

                  <a href="#" className="btn-text hover-underline label-2">
                    VER MENU
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Image src={shape1} width="246" height="412" loading="lazy" alt="shape" className="shape shape-1 move-anim" />
        <Image src={shape2} width="343" height="345" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default Services;
