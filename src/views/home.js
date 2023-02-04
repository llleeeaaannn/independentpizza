import { useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {

  const {} = useContext(AppContext);

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <div>
      <p>HOME</p>
    </div>
  )
}

export default Home;
