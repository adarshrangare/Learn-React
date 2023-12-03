import { useEffect } from "react";
import EgUseEffect from "./components/egUseEffect";
import FetchingAndRendering from "./components/FetchingAndRendering";

// useEffect Hook is used for side Effects (Not Directly related to own Componenet)
// additional work like fetching data , eventlistener etc.

function App() {
  return (
    <>
      <EgUseEffect />
      <hr />
      <FetchingAndRendering/>
    </>
  );
}

export default App;
