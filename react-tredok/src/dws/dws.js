import React from "react";
import '../components/styling/dws.scss'
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:    "games/DWS/Build/DWS 1.1.1.loader.js",
  dataUrl:      "games/DWS/Build/DWS 1.1.1.data.unityweb",
  frameworkUrl: "games/DWS/Build/DWS 1.1.1.framework.js.unityweb",
  codeUrl:      "games/DWS/Build/DWS 1.1.1.wasm.unityweb",
});

function Dws() {
  return(
    <div className="main-dws">
      <h2> This is Dog Walking Simulator! </h2>
      <Unity unityContext={unityContext} className="unity-web" />
      <div className="instructions">
        <h4> The Objective of the game is to take some dogs on a walk!</h4>
        <h3> Instrucciones </h3>

        <ul>
          <li> RMB: Click on screen to give the character a direction to follow </li>
          <li> LMB: Click on a dog when they are distracted to refill their attention bar and make them follow you </li>
          <li> Follow the <p className="red">Red</p> circle's direction to get to the next objective </li>
          <li> The <p className="orange">Orange</p> circle is the direction to which the character is moving </li>
          <li> Remember that loosing a dog is bad! try not to loose them and keep them away from distractions </li>
        </ul>
        <h5> Remember that in the center of the map there is a little peninsula/island, look for the path to it </h5>
      </div>
    </div>

  )
}

export default Dws;
