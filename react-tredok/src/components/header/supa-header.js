import '../styling/header.css'

import { NavLink } from 'react-router-dom';

function Supaheader(){
  return (
    <header className="header">
      <div>
        <NavLink to='/'>
          <img className="header-icon" src={require('../../assets/lowPolyFish.png')} alt="LowPoly Fish" />
        </NavLink>
      </div>

      <h1> WELCOME TO MY DOMAIN! </h1>

      <div>
        <NavLink to='/dws'>
          <img className="header-icon" src={require('../../assets/chihuahua.png')} alt="Doggo" />
        </NavLink>
      </div>
    </header>
  );
}

export default Supaheader;
