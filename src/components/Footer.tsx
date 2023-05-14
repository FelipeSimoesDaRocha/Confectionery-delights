const Footer = () => {
  return (
    <div className="footer section has-bg-image text-center" id="Contact">
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <address className="body-4">Rua george fridrich mordhorst, 210</address>

            <a href="mailto:deliciasDaConfeitaria@gmail.com" className="body-4 contact-link">
              deliciasDaConfeitaria@gmail.com
            </a>

            <a href="https://contate.me/delicias_da_confeitaria" className="body-4 contact-link">
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
            {[
              {
                href: "#menu",
                label: "Menu"
              },
              {
                href: "#about",
                label: "Chefs"
              },
              {
                href: "#reservation",
                label: "Contato"
              }
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} className="label-2 footer-link hover-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            {[
              {
                href: "https://www.facebook.com/margarete.santos.5817",
                label: "Facebook",
                target: "_blank"
              },
              {
                href: "#",
                label: "Instagram",
                target: "_blank"
              },
              {
                href:
                  "https://www.google.com/maps/place/R.+George+Fridrich+Mordhorst,+210+-+Itoupava+Central,+Blumenau+-+SC,+89062-220/data=!4m2!3m1!1s0x94dee1d387fd50b1:0xcb18a17a2ccef417?sa=X&ved=2ahUKEwi-z-fr2OT-AhXCrpUCHRYvDcYQ8gF6BAgNEAI",
                label: "MAPA DO GOOGLE",
                target: "_blank"
              }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="label-2 footer-link hover-underline"
                  target={item.target}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2022 Delicias Da Confeitaria. Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
