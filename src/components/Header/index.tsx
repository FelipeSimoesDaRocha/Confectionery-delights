import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div className="header-top">
        <div className="auto-container">
          <div className="inner clearfix">

            <div className="inner-left clearfix">
            </div>

            <div className="inner-right clearfix">
              <ul className='clearfix'>
                <li>
                  <a>
                    <i>"+1 123 456 7890 "</i>
                  </a>
                </li>
                <li>
                  <a>
                    <i>"booking@restaurant.com"</i>
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Header;
