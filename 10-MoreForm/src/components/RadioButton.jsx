import { useState } from "react";

const RadioButton = () => {
  let [gender, setGender] = useState("");

  return (
    <div className="radio">
      <h2>Radio Button</h2>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        checked={gender == "male"}
        onChange={(e) => {
          setGender("male");
        }}
      />
      <br />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="female"
        checked={gender == "female"}
        onChange={(e) => {
          setGender("female");
        }}
      />
    
      <br />
      <label htmlFor="other">Others</label>
      <input
        type="radio"
        id="other"
        checked={gender == "other"}
        onChange={(e) => {
          setGender("other");
        }}
      />
    </div>
  );
};

export default RadioButton;
