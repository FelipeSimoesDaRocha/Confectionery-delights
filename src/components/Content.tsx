// Components
import Home from './Home';
import Services from './Services';
import Menu from './Menu';
import About from './About';
import SpecialDish from './SpecialDish';
import Reservation from './Reservation';
import Features from './Features';

const Content = () => {
  return (
    <main>
      <article>
        <Home />
        <Services />
        <Menu />
        <About />
        <SpecialDish />
        <section className=" testi">
          <div className="container">
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
          </div>
        </section>
        <Reservation />
        <Features />
      </article>
    </main>
  );
};

export default Content;
