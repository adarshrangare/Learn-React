import React, { useState } from "react";

const Input = ({ labelName, id, inputType, placeHolder }) => {
  let [val, setVal] = useState("");

  return (
    <>
      <label htmlFor={id}> {labelName} </label>
      <input type={inputType} id={id} placeholder={placeHolder} value={val} 

        onChange = {(e)=>{
            setVal(e.target.value)
        }}

      />
    </>
  );
};

export default Input;
