import Logo from './logo';
import Times from './times';

const Landing = () => {

  return (
    <div id="landing">

      <img src="images/landingpizza.jpeg" alt="Background of two pizzas"></img>

      <header>
        <Logo />
        <span className="book">Book Now</span>
      </header>

      <div>
        <div className="landing-menu">
          <span>menu</span>
          <span>about us</span>
          <span>reservations</span>
          <span>contact</span>
          <span>faq</span>
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
