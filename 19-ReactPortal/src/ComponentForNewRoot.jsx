import React from "react";
import { createPortal } from "react-dom";

const ComponentForNewRoot = () => {
  return createPortal(
    <>
      <h1>New Root</h1>
    </>,
    document.getElementById("newRoot")
  );
};

export default ComponentForNewRoot;
