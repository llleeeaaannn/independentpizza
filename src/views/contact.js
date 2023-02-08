import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AppContext } from '../App';

const Contact = () => {

  const { menu, setMenu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="contact">
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Contact;
