import Logo from './logo';
import Close from './close';
import Socials from './socials';

const Menu = () => {

  return (
    <div id="menu">
      <nav>
        <Logo />
        <Close />
      </nav>
      <div className="content">
        <div className="inner">
          <div className="menu-nav">
            <span>menu</span>
            <span>about us</span>
            <span>reservations</span>
            <span>contact</span>
            <span>faq</span>
          </div>

          <div className="menu-info">
            <span>(01) 830 2044</span>
            <span>28 Drumcondra Rd Lower</span>
            <span>Drumcondra, Dublin 9</span>
            <span>D09 X034</span>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
