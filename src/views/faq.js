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
        <div>
          <div className="f">
            <div className="q">HMMMMMMMMMMM</div>
            <div className="a active">THIS IS THE ANSWER</div>
          </div>

          <div className="f">
            <div className="q">HMMMMMMMMMMM</div>
            <div className="a">THIS IS THE ANSWER</div>
          </div>

          <div className="f">
            <div className="q">HMMMMMMMMMMM</div>
            <div className="a">THIS IS THE ANSWER</div>
          </div>

          <div className="f">
            <div className="q">HMMMMMMMMMMM</div>
            <div className="a">THIS IS THE ANSWER</div>
          </div>
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
