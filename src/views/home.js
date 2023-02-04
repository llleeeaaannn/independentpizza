import { useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Landing from '../components/landing'

const Home = () => {

  const {} = useContext(AppContext);

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <div>
      <Landing />
    </div>
  )
}

export default Home;
