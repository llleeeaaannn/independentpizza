import './styles/styles.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Contact from './views/contact';
import NotFound from './views/notfound';

export const AppContext = React.createContext();

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
