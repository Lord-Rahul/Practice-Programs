import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //refhook

  const passwordRef = useRef(null);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]:?/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-white text-center">Password Genrator</h1>
        <div className="flex justify-center gap-5 my-5 p-5 content-center  shadow-md rounded-lg overflow-hidden-auto">
          <input
            type="text"
            value={Password}
            className="outline-none bg-white w-full text-black py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyPass}
            className="bg-blue-800 text-white p-2 hover:bg-blue-500 "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 p-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              ref={passwordRef}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length} </label>
          </div>
          <div className="flex ites-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex ites-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
