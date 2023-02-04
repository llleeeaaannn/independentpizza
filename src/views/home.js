import { useEffect, useContext } from 'react';
import { AppContext } from '../App';
import About from '../components/about';
import Landing from '../components/landing';

const Home = () => {

  const {} = useContext(AppContext);

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <div>
      <Landing />
      <About />
    </div>
  )
}

export default Home;
