import React, { useState } from "react";

export function Input() {

  const [ inputValue, setInputValue ] = useState("");

  return (
    <div>
      {/* <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} /> */}
      {/* basic example */}
      {/* <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}
      <input value={inputValue} onChange={ (e) => {
        if(!e.target.value.includes("t")) {
          setInputValue(e.target.value)
        }
      }
      } />
    </div>

  );
}