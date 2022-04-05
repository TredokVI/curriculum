import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Supaheader from './components/header/supa-header.js'
import LandingPage from './pages/landing.js'
import Dws from './dws/dws.js';


function App() {
  return (
      <div>
        <Supaheader />
        <main>
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/dws" element={<Dws className="dws"/>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
