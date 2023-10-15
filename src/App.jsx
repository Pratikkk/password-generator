import React, { useState, useRef, useEffect, useCallback } from "react";
import { Tooltip } from "react-tooltip";
import zxcvbn from "zxcvbn";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(0);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const [passwordStrength, setPasswordStrength] = useState({score: 0, feedback: []});

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const generateRandomString = (length) => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      if (numberAllowed) characters += "0123456789";
      if (characterAllowed) characters += "!@#$%^&*()_+";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };
    const generatedPassword = generateRandomString(8);
    setPassword(generatedPassword);
    const pass = generateRandomString(length);
    setPassword(pass);
    setButtonText("Copy");

    const strength = calculatePasswordStrength(pass);
    setPasswordStrength(strength);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999);
      window.navigator.clipboard.writeText(password);
      setButtonText("Copied !");
    }
  }, [password]);

  const calculatePasswordStrength = (password) => {
    const  result  = zxcvbn(password);
    return {
      score: result.score,
      feedback: result.feedback.suggestions,
      
    }
  };
  const getStrengthText = (score) => {
    if (score === 0) {
      return "Very Weak";
    } else if (score === 1) {
      return "Weak";
    } else if (score === 2) {
      return "Medium";
    } else if (score === 3) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  }

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <div className='h-screen dark:bg-slate-800 max-h-md dark:text-white fonts-poppins flex justify-center items-center flex-col py-8 content-center'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-7 text-cyan-500 '>
          <input
            type='text'
            value={password}
            placeholder='Password'
            readOnly={true}
            className='w-full border-2 border-cyan-500 py-4 px-4 shrink-0 rounded-md focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300'
            ref={passwordRef}
          />
          <div className="mt-4">
            <p className="text-lg font-semibold text-cyan-600">Password Strength: {getStrengthText(passwordStrength.score)}</p>
            <ul className="mt-2">{passwordStrength.feedback.map((message, index) => <li key={index}>{message}</li>)}</ul>
          </div>
        </div>
        <button
          onClick={copyPasswordToClipboard}
          className='px-7 py-4 bg-cyan-500 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300'
        >
          {buttonText}
        </button>
        <button
          className='px-4 py-2 bg-cyan-800 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300'
          onClick={generatePassword}
        >
          Randomize
        </button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              className='slider appearance-none w-full h-2 bg-cyan-200 rounded-lg outline-none opacity-75 active:opacity-100 focus:opacity-100 border-cyan-500  '
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input
              className='form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500'
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              id='numberInput'
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              className='form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500'
              type='checkbox'
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
