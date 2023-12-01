import React, { useState } from "react";

const HandleMultiInputs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let { firstName, lastName, email, password, confirmPassword } = formData;

  function handleChange(e) {
    console.log(e.target.id);

    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(password != confirmPassword){
        alert("Password is Mismatched");
        return;
    }
    console.log(formData);
  }

  return (
    <div className="handleMultiInputs">
      <h2>Handle Multi Input</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Choose Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default HandleMultiInputs;
