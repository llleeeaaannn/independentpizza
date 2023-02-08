import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AppContext } from '../App';

const FoodMenu = () => {

  const { menu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="foodmenu">
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default FoodMenu;
