import Logo from './logo';
import Close from './close';
import Socials from './socials';
import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const Menu = () => {

  const { menu, setMenu } = useContext(AppContext);

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <div id="menu">
      <nav>
        <Logo />
        <Close />
      </nav>
      <div className="content">
        <div className="inner">
          <div className="menu-nav">
            <Link to="/menu" onClick={closeMenu}>menu</Link>
            <Link to="/" onClick={closeMenu}>about us</Link>
            <Link to="/reservations" onClick={closeMenu}>reservations</Link>
            <Link to="/contact" onClick={closeMenu}>contact</Link>
            <Link to="/faq" onClick={closeMenu}>faq</Link>
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
