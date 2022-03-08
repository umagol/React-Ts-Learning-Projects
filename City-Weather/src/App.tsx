import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

const App:any = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
}

export default App;
