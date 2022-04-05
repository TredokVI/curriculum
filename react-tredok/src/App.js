import './components/styling/App.css';

import Supaheader from './components/header/supa-header.js'
import Dws from './dws/dws.js';


function App() {
  return (
    <div className="App">
      <Supaheader />

      <h2> This is Dog Walking Simulator! </h2>
      <Dws className="dws"/>

      <footer>

      </footer>
    </div>
  );
}

export default App;
