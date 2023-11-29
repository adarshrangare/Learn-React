import React from "react";

const User = ({ id, firstName, lastName, location, age, increaseAge , deleteUser}) => {
//   console.log("User Render");
  return (
    <>
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName} </p>
      <p>Location: {location} </p>
      <p>Age: {age} </p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete User
      </button>
    </>
  );
};

export default User;
