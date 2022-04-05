import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:    "games/DWS/Build/DWS 1.1.1.loader.js",
  dataUrl:      "games/DWS/Build/DWS 1.1.1.data.unityweb",
  frameworkUrl: "games/DWS/Build/DWS 1.1.1.framework.js.unityweb",
  codeUrl:      "games/DWS/Build/DWS 1.1.1.wasm.unityweb",
});

function Dws() {
  return(
    <div>
      <h2> This is Dog Walking Simulator! </h2>
      <Unity
        unityContext={unityContext}
        style={{
          height: "720px",
          width: "1280px",
          border: "2px solid black",
          background: "grey",
        }}/>
    </div>

  )
}

export default Dws;
