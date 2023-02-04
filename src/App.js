import './styles/styles.scss';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';

export const AppContext = React.createContext();

function App() {

  const [random, setRandom] = useState(true);

  return (
    <AppContext.Provider value={{ random, setRandom }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
