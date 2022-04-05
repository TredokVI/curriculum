import '../styling/header.css'

import { NavLink } from 'react-router-dom';

function Supaheader(){
  return (
    <header className="header">
      <NavLink to='/'>
        <img className="header-icon" src={require('../../assets/lowPolyFish.png')} alt="LowPoly Fish" />
      </NavLink>

      <h1> WELCOME TO MY DOMAIN! </h1>

      <NavLink to='/dws'>
        <img className="header-icon" src={require('../../assets/chihuahua.png')} alt="LowPoly Fish" />
      </NavLink>

    </header>
  );
}

export default Supaheader;
