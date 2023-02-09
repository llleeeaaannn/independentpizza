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

  const q2 = <span>What are our opening hours?</span>
  const a2 = <div className="times">
                <span>Monday & Tuesday: Closed</span>
                <span>Wednesday & Thursday: 16:00 - 21:00</span>
                <span>Friday & Saturday: 12:00 - 22:00</span>
                <span>Sunday: 12:00 - 21:00</span>
              </div>
  const q3 = <span>Do we have vouchers?</span>
  const a3 = <p>We do! Vouchers are available in store or you can buy them <Link to="/reservations">here.</Link></p>

  const q4 = <span>Can you come to us with your dog?</span>
  const a4 = <p>Unfortunately, pets aren't allowed in our restaurant.</p>

  const q5 = <span></span>
  const a5 = <p></p>

  return (
    <>
      <Navbar />
      <div id="faq">
        <div className="inner">

          <Question questionText={q1} answerText={a1} />

          <Question questionText={q2} answerText={a2} />

          <Question questionText={q3} answerText={a3} />

          <Question questionText={q4} answerText={a4} />
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
