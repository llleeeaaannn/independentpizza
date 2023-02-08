import Times from './times';
import Navbar from './navbar';

const Menu = () => {

  return (
    <div id="menu">
      <Navbar />
      <div>
        <div className="menu-nav">
          <span>menu</span>
          <span>about us</span>
          <span>reservations</span>
          <span>contact</span>
          <span>faq</span>
        </div>

        <div className="menu-info">
          <Times />
          <span>(01) 830 2044</span>
        </div>
      </div>
    </div>
  )
}

export default Menu;
