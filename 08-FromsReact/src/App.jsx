
import { useState } from "react";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [output, setOutput] = useState("");

  return (
    <div className="main">
      <h1>User Details</h1>
      <form onSubmit={
          (e)=>{
            e.preventDefault();
            console.log("submitted");
            setOutput("Welcome \n "+firstName+" "+lastName);
            setFirstName("")
            setLastName("")
          }}>
        <label htmlFor="firstName"> First Name: </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter you First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br /> <br />
        <label htmlFor="lastName"> Last Name: </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter you Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br /> <br />
        <button type="submit">Submit Details</button>
        <br />
      </form>
          <br /> <br />
      <div className="output"><h1> {output} </h1></div>
    </div>
  );
}

export default App;
