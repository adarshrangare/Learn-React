import React from "react";

const Button = () => {
  function handleClick(firstName, lastName) {
    console.log("button2 clicked");
    console.log(firstName + " " + lastName);
  }

  return (
    <>
      <button
        onClick={(e) => {
          console.log(e);
          console.log("I am get clicked", e.target.value);
          e.target.textContent = "I am clicked";
        }}
      >
        Click Me
      </button>
      <br />
      <br />
      <button
        onClick={(e) => {
          console.log(e.target);
          handleClick("adarsh", "rangare");
        }}
      >
        Button 2 Click
      </button>

      {/* Only pass Function Reference in onClick or any other events */}

      {/*   

        onClick event will only work on HTML Elements like h1, buttons all the HTML Elements
        but
        It will not work with React Components like in this example Button; 

      */}
    </>
  );
};

export default Button;
