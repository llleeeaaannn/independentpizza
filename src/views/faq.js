import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useState, useContext } from 'react';
import { AppContext } from '../App';
import AnimateHeight from 'react-animate-height';

const Faq = () => {

  const { menu } = useContext(AppContext);

  const closed = 0;
  const open = 'auto';
  const [height, setHeight] = useState(0);

  return (
    <>
      <Navbar />
      <div id="faq">
        <div>
          <div onClick={() => setHeight(height === closed ? open : closed)}>
            {height === closed ? 'Open' : 'Close'}
          </div>

          <AnimateHeight
            id="example-panel"
            duration={500}
            height={height} // see props documentation below
          >
            <h1>Your content goes here</h1>
            <p>Put as many React or HTML components here.</p>
          </AnimateHeight>
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
