import Image from 'next/image';

import img from '../../assets/images/footer-bg.jpg';
import logo from '../../assets/images/logo.svg';

import * as S from './Footer.styles';

const Footer = () => {
  return (
    <S.Footer className="footer section has-bg-image text-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            {/* <a href="#" className="logo">
              <Image src={logo} width="160" height="50" loading="lazy" alt="grilli home" />
            </a> */}

            <address className="body-4">Rua george fridrich mordhorst, 210</address>

            <a href="mailto:deliciasDaConfeitaria@gmail.com" className="body-4 contact-link">
              deliciasDaConfeitaria@gmail.com
            </a>

            <a href="tel:+554791075411" className="body-4 contact-link">
              Fazer pedido : +55 47 9107-5411
            </a>

            <p className="body-4">Aberto: 8h00 - 22h00</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Receba notícias e ofertas</p>

            <p className="label-1">
              Inscreva-se e ganhe <span className="span">25% de desconto.</span>
            </p>

            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                {/* <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> */}

                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Se inscrever</span>

                <span className="text text-2" aria-hidden="true">
                  Se inscrever
                </span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Menus
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Chefs
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Contato
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Facebook
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Youtube
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                MAPA DO GOOGLE
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2022 Delicias Da Confeitaria. Todos os direitos reservados</p>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
