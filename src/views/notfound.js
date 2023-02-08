import { useEffect } from 'react';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AppContext } from '../App';


const NotFound = () => {

  const { menu } = useContext(AppContext);

  useEffect(() => {
    document.title = '';
  }, []);

  return (
    <>
      <Navbar />
      <div id="notfound">
      404
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default NotFound;
