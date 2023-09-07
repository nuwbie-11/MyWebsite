import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './templates/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
    </div>
  );
}