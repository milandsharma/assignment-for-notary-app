import React, { useState } from "react";

function Input(props) {
  return (
    <>
      <div className="input-div">
        <div className="input-div-label">
          <label><h4>{props.label}</h4></label>
          <p>{props.paragraph}</p>
        </div>
        <div>
          <input onChange={props.onChange}  type="text" name={props.name} />
        </div>
      </div>
    </>
  );
}
export default Input;
