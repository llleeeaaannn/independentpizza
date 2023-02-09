import { Link } from 'react-router-dom';
import Logo from './logo';
import Times from './times';

const Landing = () => {

  return (
    <div id="landing">

      <img src="images/landingpizza.jpeg" alt="Background of two pizzas"></img>

      <header>
        <Logo />
        <Link to="/reservations" className="book">Book Now</Link>
      </header>

      <div>
        <div className="landing-menu">
          <Link to="/menu">menu</Link>
          <a href="#about">about us</a>
          <Link to="/reservations">reservations</Link>
          <Link to="/contact">contact</Link>
          <Link to="/faq">faq</Link>
        </div>

        <div className="landing-name">
          <h2>independent</h2>
          <h1>pizza</h1>
        </div>
      </div>

      <footer>
        <p>We are an Irish owned business and all our ingredients are bought in fresh and prepared in our own kitchens. We use Irish suppliers wherever possible, our pepperoni is produced in Dundalk, our mozzarella is from Bandon in Cork and our Irish chicken is Irish!</p>
        <Times />
      </footer>
    </div>
  )
}

export default Landing;
