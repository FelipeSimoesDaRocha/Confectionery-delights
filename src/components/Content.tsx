import Image from 'next/image';

import aboutBanner from '../assets/images/about-banner.jpg';
import badge1 from '../assets/images/badge-1.png';
import event1 from '../assets/images/event-1.jpg';
import event2 from '../assets/images/event-2.jpg';
import event3 from '../assets/images/event-3.jpg';
import featuresIcon1 from '../assets/images/features-icon-1.png';
import featuresIcon2 from '../assets/images/features-icon-2.png';
import featuresIcon3 from '../assets/images/features-icon-3.png';
import featuresIcon4 from '../assets/images/features-icon-4.png';
import aboutAbsImage from '../assets/images/gg.jpg';
import heroIcon from '../assets/images/hero-icon.png';
import heroSlider1 from '../assets/images/hero-slider-1.jpg';
import heroSlider2 from '../assets/images/hero-slider-2.jpg';
import heroSlider3 from '../assets/images/hero-slider-3.jpg';
import shape3 from '../assets/images/shape-3.png';
import shape4 from '../assets/images/shape-4.png';

import shape7 from '../assets/images/shape-7.png';
import shape8 from '../assets/images/shape-8.png';
import shape9 from '../assets/images/shape-9.png';
import specialDishBanner from '../assets/images/special-dish-banner.jpg';

// Components
import Menu from './Menu';
import Services from './Services';

const Content = () => {
  return (
    <main>
      <article>
        {/* // Hero */}
        <section className="hero text-center" aria-label="home" id="home">
          <ul className="hero-slider" data-hero-slider>
            <li className="slider-item active" data-hero-slider-item>
              <div className="slider-bg">
                <Image src={heroSlider1} width="1880" height="950" alt="" className="img-cover" />
              </div>

              <h1 className="display-1 hero-title slider-reveal">
                Delicias Da
                <br />
                Confeitaria
              </h1>

              <p className="body-2 hero-text slider-reveal">Doces, Bolos e Salgados</p>

              <a href="#" className="btn btn-primary slider-reveal">
                <span className="text text-1">Confira o cardápio</span>

                <span className="text text-2" aria-hidden="true">
                  Confira o cardápio
                </span>
              </a>
            </li>

            <li className="slider-item" data-hero-slider-item>
              <div className="slider-bg">
                <Image src={heroSlider2} width="1880" height="950" alt="" className="img-cover" />
              </div>

              <p className="label-2 section-subtitle slider-reveal">delightful experience</p>

              <h1 className="display-1 hero-title slider-reveal">
                Flavors Inspired by <br />
                the Seasons
              </h1>

              <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>

              <a href="#" className="btn btn-primary slider-reveal">
                <span className="text text-1">Confira o cardápio</span>

                <span className="text text-2" aria-hidden="true">
                  Confira o cardápio
                </span>
              </a>
            </li>

            <li className="slider-item" data-hero-slider-item>
              <div className="slider-bg">
                <Image src={heroSlider3} width="1880" height="950" alt="" className="img-cover" />
              </div>

              <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>

              <h1 className="display-1 hero-title slider-reveal">
                Where every flavor <br />
                tells a story
              </h1>

              <p className="body-2 hero-text slider-reveal">Come with family & feel the joy of mouthwatering food</p>

              <a href="#" className="btn btn-primary slider-reveal">
                <span className="text text-1">Confira o cardápio</span>

                <span className="text text-2" aria-hidden="true">
                  Confira o cardápio
                </span>
              </a>
            </li>
          </ul>

          <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
            <p style={{ transform: 'translateY(5%) rotate(320deg)' }}>&#x3c;</p>
          </button>

          <button className="slider-btn next" aria-label="slide to next" data-next-btn>
            <p style={{ transform: 'translateY(5%) rotate(320deg)' }}>&#x3e;</p>
          </button>

          <a href="#" className="hero-btn has-after">
            <Image src={heroIcon} width="48" height="48" alt="booking icon" />
            <span className="label-2 text-center span">Fazer pedido</span>
          </a>
        </section>

        <Services />
        <Menu />

        {/* about-me */}
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

        {/* Prato especial */}
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
                A lasanha de carne com requeijão vai ser sucesso entre seus amigos no próximo encontro. Pode apostar,
                não vai sobrar nada, e ainda vão repetir para você repetir a dose em outra oportunidade.
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

        <section className=" testi">
          <div className="container">
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="reservation">
          <div className="container">
            <div className="form reservation-form bg-black-10">
              <form action="" className="form-left">
                <h2 className="headline-1 text-center">Pedido on-line</h2>

                <p className="form-text text-center">
                  Pedido de reserva
                  <a href="tel:+554791075411" className="link">
                    +55 47 9107-5411
                  </a>
                  ou preencha o formulário de encomenda
                </p>

                <div className="input-wrapper">
                  <input type="text" name="name" placeholder="Seu nome" autoComplete="off" className="input-field" />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Número de telefone"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>

                <div className="input-wrapper">
                  <div className="icon-wrapper">
                    {/* <ion-icon name="person-outline" aria-hidden="true"></ion-icon> */}

                    <select name="person" className="input-field">
                      <option value="1-person">1 Pessoa</option>
                      <option value="2-person">2 Pessoa</option>
                      <option value="3-person">3 Pessoa</option>
                      <option value="4-person">4 Pessoa</option>
                      <option value="5-person">5 Pessoa</option>
                      <option value="6-person">6 Pessoa</option>
                      <option value="7-person">7 Pessoa</option>
                    </select>

                    {/* <ion-icon name="chevron-down" aria-hidden="true"></ion-icon> */}
                  </div>

                  <div className="icon-wrapper">
                    {/* <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon> */}

                    <input type="date" name="reservation-date" className="input-field" />

                    {/* <ion-icon name="chevron-down" aria-hidden="true"></ion-icon> */}
                  </div>

                  <div className="icon-wrapper">
                    {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}
                    <select name="person" className="input-field">
                      <option value="08:00am">08:00 am</option>
                      <option value="09:00am">09:00 am</option>
                      <option value="010:00am">10:00 am</option>
                      <option value="011:00am">11:00 am</option>
                      <option value="012:00am">12:00 am</option>
                      <option value="01:00pm">01:00 pm</option>
                      <option value="02:00pm">02:00 pm</option>
                      <option value="03:00pm">03:00 pm</option>
                      <option value="04:00pm">04:00 pm</option>
                      <option value="05:00pm">05:00 pm</option>
                      <option value="06:00pm">06:00 pm</option>
                      <option value="07:00pm">07:00 pm</option>
                      <option value="08:00pm">08:00 pm</option>
                      <option value="09:00pm">09:00 pm</option>
                      <option value="10:00pm">10:00 pm</option>
                    </select>

                    {/* <ion-icon name="chevron-down" aria-hidden="true"></ion-icon> */}
                  </div>
                </div>

                <textarea name="message" placeholder="Mensagem" autoComplete="off" className="input-field"></textarea>

                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Enviar</span>

                  <span className="text text-2" aria-hidden="true">
                    Enviar
                  </span>
                </button>
              </form>

              <div className="form-right text-center">
                <h2 className="headline-1 text-center">Contate-nos</h2>

                <p className="contact-label">Faça Um Pedido</p>

                <a href="tel:+554791075411" className="body-1 contact-number hover-underline">
                  +55 47 9107-5411
                </a>

                <div className="separator"></div>

                <p className="contact-label">Localização</p>

                <address className="body-4">
                  Delicias da confeitaria, <br />
                  Blumenau
                </address>

                <p className="contact-label">Aberto</p>

                <p className="body-4">
                  Segunda a Domingo <br />
                  das 08h00 às 22h00
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section features text-center" aria-label="features">
          <div className="container">
            <p className="section-subtitle label-2">Porque escolher-nos</p>

            <h2 className="headline-1 section-title">Our Strength</h2>

            <ul className="grid-list">
              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <Image src={featuresIcon1} width="100" height="80" loading="lazy" alt="icon" />
                  </div>

                  <h3 className="title-2 card-title">Hygienic Food</h3>

                  <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
                </div>
              </li>

              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <Image src={featuresIcon2} width="100" height="80" loading="lazy" alt="icon" />
                  </div>

                  <h3 className="title-2 card-title">Fresh Environment</h3>

                  <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
                </div>
              </li>

              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <Image src={featuresIcon3} width="100" height="80" loading="lazy" alt="icon" />
                  </div>

                  <h3 className="title-2 card-title">Skilled Chefs</h3>

                  <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
                </div>
              </li>

              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <Image src={featuresIcon4} width="100" height="80" loading="lazy" alt="icon" />
                  </div>

                  <h3 className="title-2 card-title">Event & Party</h3>

                  <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
                </div>
              </li>
            </ul>

            <Image src={shape7} width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />

            <Image src={shape8} width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
          </div>
        </section>

        <section className="section event bg-black-10" aria-label="event">
          <div className="container">
            <p className="section-subtitle label-2 text-center">Recent Updates</p>

            <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

            <ul className="grid-list">
              <li>
                <div className="event-card has-before hover:shine">
                  <div className="card-banner img-holder" style={{ width: 350, height: 450 }}>
                    <Image
                      src={event1}
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />

                    <time className="publish-date label-2" dateTime="2022-09-15">
                      15/09/2022
                    </time>
                  </div>

                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">Food, Flavour</p>

                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>

              <li>
                <div className="event-card has-before hover:shine">
                  <div className="card-banner img-holder" style={{ width: 350, height: 450 }}>
                    <Image
                      src={event2}
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />

                    <time className="publish-date label-2" dateTime="2022-09-08">
                      08/09/2022
                    </time>
                  </div>

                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">Healthy Food</p>

                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>

              <li>
                <div className="event-card has-before hover:shine">
                  <div className="card-banner img-holder" style={{ width: 350, height: 450 }}>
                    <Image
                      src={event3}
                      width="350"
                      height="450"
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />

                    <time className="publish-date label-2" dateTime="2022-09-03">
                      03/09/2022
                    </time>
                  </div>

                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">Recipie</p>

                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>
            </ul>

            <a href="#" className="btn btn-primary">
              <span className="text text-1">View Our Blog</span>

              <span className="text text-2" aria-hidden="true">
                View Our Blog
              </span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Content;
