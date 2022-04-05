import '../styling/App.css'
import '../styling/header.css'

function Supaheader(){
  return (
    <header className="header">
      <img className="header-icon" src={require('../../assets/lowPolyFish.png')} alt="LowPoly Fish" />
      <h1> WELCOME TO MY DOMAIN! </h1>
      <img className="header-icon" src={require('../../assets/lowPolyFish.png')} alt="LowPoly Fish" />
    </header>
  );
}

export default Supaheader;
