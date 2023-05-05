import Image from 'next/image';
import { useState } from 'react';

import menu1 from '../assets/images/menu-1.png';
import menu2 from '../assets/images/menu-2.png';
import menu3 from '../assets/images/menu-3.png';
import menu4 from '../assets/images/menu-4.png';
import menu5 from '../assets/images/menu-5.png';
import menu6 from '../assets/images/menu-6.png';

import shape5 from '../assets/images/shape-5.png';
import shape6 from '../assets/images/shape-5.png';

const Menu = () => {
  const [prices, setPrices] = useState(false);

  const menu = [
    {
      id: 1,
      name: 'Doces',
      image: menu1,
      price: 0,
      description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
      isSeasonal: true,
    },
    {
      id: 2,
      name: 'Bolos',
      image: menu2,
      price: 0,
      description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
      isNew: true,
    },
    {
      id: 3,
      name: 'Salgados',
      image: menu3,
      price: 0,
      description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
    },
    {
      id: 4,
      name: 'Tokusen Wagyu',
      image: menu4,
      price: 0,
      description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.',
    },
    {
      id: 5,
      name: 'Olivas Rellenas',
      image: menu5,
      price: 0,
      description: 'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.',
    },
    {
      id: 6,
      name: 'Opu Fish',
      image: menu6,
      price: 0,
      description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices',
    },
  ];

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Seleção especial</p>
        <h2 className="headline-1 section-title text-center">Menu</h2>

        <ul className="grid-list">
          {menu.map(item => (
            <li key={item.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ width: 100, height: 100 }}>
                  <Image
                    src={item.image}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#menu" className="card-title">
                        {item.name}
                      </a>
                    </h3>
                    {item.isSeasonal && <span className="badge label-1">Seasonal</span>}
                    {item.isNew && <span className="badge label-1">New</span>}
                    {prices ? <span className="span title-2">${item.price.toFixed(2)}</span> : null}
                  </div>

                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">Ver todo menu</span>
          <span className="text text-2" aria-hidden="true">
            Ver todo menu
          </span>
        </a>

        <Image src={shape5} width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
        <Image src={shape6} width="343" height="345" loading="lazy" alt="shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
};

export default Menu;
