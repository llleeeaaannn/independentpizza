import { useEffect } from 'react';
import About from '../components/about';
import Footer from '../components/footer';
import Landing from '../components/landing';

const Home = () => {

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <div>
      <Landing />
      <About />
      <Footer />
    </div>
  )
}

export default Home;
