import React, { useEffect } from "react";
import { useState } from "react";

const MouseMoveEvent = () => {
    console.log("component re-render");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const handleMouseMove = (e) => {
    console.log({ x: e.clientX, y: e.clientY });

    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect");
    document.addEventListener("mousemove", handleMouseMove);
    // This EventListener will be attached even after unmounting the Component
    // So have to use cleanUp Function to remove eventListener

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        x : {x}
        <br />y : {y}
      </p>
    </div>
  );
};

export default MouseMoveEvent;
