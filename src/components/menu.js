import Logo from './logo';
import Times from './times';
import Close from './close';
import Socials from './socials';

const Menu = () => {

  return (
    <div id="menu">
      <nav>
        <Logo />
        <Socials />
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
            <Times />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
