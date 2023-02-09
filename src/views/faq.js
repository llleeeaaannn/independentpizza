import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import AnimateHeight from 'react-animate-height';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Question from '../components/question';

const Faq = () => {

  const { menu } = useContext(AppContext);

  const q1 = <span>What type of cuisine do we serve?</span>
  const a1 = <p>Our menu consists primarily of pizza but we also serve options including burgers and salads. Our pizzas are also available with a gluten-free base. Of course, seasonal starters and desserts are served year round too. You can find our menu <Link to="/menu">here</Link></p>

  const q2 = <span></span>
  const a2 = <p></p>

  const q3 = <span></span>
  const a3 = <p></p>

  const q4 = <span></span>
  const a4 = <p></p>

  const q5 = <span></span>
  const a5 = <p></p>

  return (
    <>
      <Navbar />
      <div id="faq">
        <div className="inner">

          <Question questionText={q1} answerText={a1} />

          <Question questionText={q1} answerText={a1} />

          <Question questionText={q1} answerText={a1} />
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
