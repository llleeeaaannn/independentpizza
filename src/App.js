import './styles/styles.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Faq from './views/faq';
import Home from './views/home';
import Contact from './views/contact';
import NotFound from './views/notfound';
import FoodMenu from './views/foodmenu';
import Reservations from './views/reservations';

export const AppContext = React.createContext();

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/menu' element={<FoodMenu />} />
        <Route exact path='/reservations' element={<Reservations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
