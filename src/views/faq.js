import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useState, useContext } from 'react';
import { AppContext } from '../App';
import AnimateHeight from 'react-animate-height';

const Faq = () => {

  const { menu } = useContext(AppContext);

  const closed = 0;
  const open = 'auto';
  const [height1, setHeight1] = useState(closed);
  const [height2, setHeight2] = useState(closed);
  const [height3, setHeight3] = useState(closed);
  const [height4, setHeight4] = useState(closed);
  const [height5, setHeight5] = useState(closed);
  const [height6, setHeight6] = useState(closed);
  const [height7, setHeight7] = useState(closed);

  return (
    <>
      <Navbar />
      <div id="faq">
        <div className="inner">
          <div className="f">
            <div className={height1 ? "q open" : "q"} onClick={() => setHeight1(height1 === closed ? open : closed)}>
              <h2>This is the question</h2>
            </div>

            <AnimateHeight className="a" height={height1} duration={500}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </AnimateHeight>
          </div>

          <div className="f">
            <div className="q" onClick={() => setHeight2(height2 === closed ? open : closed)}>
              <h2>This is the question</h2>
            </div>

            <AnimateHeight className="a" height={height2} duration={500}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </AnimateHeight>
          </div>

          <div className="f">
            <div className="q" onClick={() => setHeight3(height3 === closed ? open : closed)}>
              <h2>This is the question</h2>
            </div>

            <AnimateHeight className="a" height={height3} duration={500}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </AnimateHeight>
          </div>
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
