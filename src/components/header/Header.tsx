const Header = () => {
  const items = [
    {
      title: 'Home',
      active: 'active',
      href: '#home',
    },
    {
      title: 'Menus',
      active: '',
      href: '#menu',
    },
    {
      title: 'Sobre',
      active: '',
      href: '#about',
    },
    {
      title: 'Contato',
      active: '',
      href: '#Contact',
    },
  ];

  return (
    <div id="top">
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">{/* <ion-icon name="location-outline" aria-hidden="true"></ion-icon> */}</div>
            <span className="span">Rua george fridrich mordhorst, 210</span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">{/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}</div>

            <span className="span">Aberto : 8.00 am 10.00 pm</span>
          </div>

          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">{/* <ion-icon name="call-outline" aria-hidden="true"></ion-icon> */}</div>

            <span className="span">+55 47 9107-5411</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:deliciasDaConfeitaria@gmail.com" className="topbar-item link">
            <div className="icon">{/* <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> */}</div>

            <span className="span">DeliciasDaConfeitaria@gmail.com</span>
          </a>
        </div>
      </div>

      <header className="header" data-header>
        <div className="container">
          <nav className="navbar" data-navbar>
            <button className="close-btn" aria-label="close menu" data-nav-toggler>
              {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
            </button>

            <ul className="navbar-list">
              {items.map((item, index) => (
                <li className="navbar-item" key={index}>
                  <a href={item.href} className={`navbar-link hover-underline ${item.active ? 'active' : ''}`}>
                    <div className="separator"></div>
                    <span className="span">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>

              <address className="body-4">
                Delicias da confeitaria, <br />
                Bluemanu 89062-220 , SC
              </address>

              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

              <a href="mailto:DeliciasDaConfeitaria@gmail.com" className="body-4 sidebar-link">
                DeliciasDaConfeitaria@gmail.com
              </a>

              <div className="separator"></div>

              <p className="contact-label">Booking Request</p>

              <a href="tel:+554791075411" className="body-1 contact-number hover-underline">
                +55 47 9107-5411
              </a>
            </div>
          </nav>

          {/* <a href="#" className="btn btn-secondary">
            <span className="text text-1">Find A Table</span>

            <span className="text text-2" aria-hidden="true">
              Find A Table
            </span>
          </a> */}

          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
