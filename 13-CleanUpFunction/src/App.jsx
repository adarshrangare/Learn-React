import { useState } from "react";
import MouseMoveEvent from "./components/MouseMoveEvent";
import CleanUpFunction from "./components/CleanUpFunction";

// CleanUp Function

// Use Effect  : used for Side Effects



const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>Clean Up Function</h1>
      <label htmlFor="showComponent">Show/Hide Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        onChange={(e) => setShowComponent((prev) => !prev)}
        checked={showComponent}
      />
      {/* {showComponent && <CleanUpFunction />} */}
      {showComponent && <MouseMoveEvent/>}
    </div>
  );
};

export default App;
