import Menu from '../components/menu';
import Times from '../components/times';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useContext } from 'react';
import { AppContext } from '../App';

const Contact = () => {

  const { menu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="contact">
        <header>
          <h2>Contact</h2>
          <div>
            <span>(01) 830 2044</span>
            <span>customercare@ilovepizza.ie</span>
          </div>
        </header>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d550.8354499112014!2d-6.260538939696275!3d53.36368798043172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1aab0ff98e9a56d7!2sIndependent%20Pizza%20Company!5e0!3m2!1sen!2sie!4v1676049167791!5m2!1sen!2sie" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
      { menu && <Menu /> }
    </>
  )
}

export default Contact;
