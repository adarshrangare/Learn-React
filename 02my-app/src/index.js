import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App/>
      <h1 style={{display:'none'}}>Created using</h1>
      <p style={{display:'none'}}>create-react-app</p>
    </>
  </React.StrictMode>
);
