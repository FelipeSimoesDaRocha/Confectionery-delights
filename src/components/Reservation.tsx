import Image from 'next/image';

import shape8 from '../assets/images/shape-8.png';

const Reservation = () => {
  return (
    <section className="reservation" id='reservation'>
      <div className="container">

        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left">
            <h2 className="headline-1 text-center">Pedido on-line</h2>

            <p className="form-text text-center">
              Pedido de reserva
              <a href="https://contate.me/delicias_da_confeitaria" className="link">
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

            <a href="https://contate.me/delicias_da_confeitaria" className="body-1 contact-number hover-underline">
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

        <Image src={shape8} width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Reservation;
