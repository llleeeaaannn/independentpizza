import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AppContext } from '../App';

const Reservations = () => {

  const { menu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="reservations">
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Reservations;
