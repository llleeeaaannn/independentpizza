import Logo from './logo';
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
            <span>(01) 830 2044</span>
            <span>28 Drumcondra Rd Lower</span>
            <span>Drumcondra, Dublin 9</span>
            <span>D09 X034</span>
            <a href="https://goo.gl/maps/EFwraScp3MWDR8dN8" rel="noopener noreferrer" target="_blank">
              <svg viewBox="0 0 256 256">
                <path d="M128.1 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.2 83.4 134.6a8.3 8.3 0 0 0 9.2 0c3.4-2.4 83.4-59.3 83.4-134.6a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
