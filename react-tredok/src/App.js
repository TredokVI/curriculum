import React from 'react';
import { Routes, Route } from "react-router-dom";
import './components/styling/App.css'

// import Supaheader from './components/header/supa-header';
// import LandingPage from './pages/landing';
import Landing from './pages/LandingPage';
import Dws from './dws/dws';


export default function App() {
  return (
      <div >
        <main>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/dws" element={<Dws className="dws"/>} />
          </Routes>
        </main>
      </div>
  );
}
