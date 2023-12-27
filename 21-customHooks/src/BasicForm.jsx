import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const BasicForm = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName","");
  const [lastName, setLastName] = useLocalStorage( "lastName","");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name: </label>
      <input
        type="text"
        id="fname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="lname">Last Name: </label>
      <input
        type="text"
        id="lname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />

     <h2>Full Name: {firstName +" "+ lastName}</h2>


    </form>
  );
};

export default BasicForm;
