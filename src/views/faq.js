import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AppContext } from '../App';

const Faq = () => {

  const { menu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="faq">
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
