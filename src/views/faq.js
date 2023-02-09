import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { useState, useContext } from 'react';
import { AppContext } from '../App';
import AnimateHeight from 'react-animate-height';
import Question from '../components/question';

const Faq = () => {

  const { menu } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div id="faq">
        <div className="inner">
          <Question questionText="This is the questionnnn" answerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />

          <Question questionText="This is the second questionnnn" answerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />

          <Question questionText="This is the lo lolo nvjusfbjb fweruuhvbweuh sjhgugeu fei" answerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s t of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
        </div>
      </div>
      { menu && <Menu /> }
    </>
  )
}

export default Faq;
