import React, { useState, useCallback } from "react";

function PasswordGenerator({
    
  length,
  setLength,
  numberAllowed,
  setNumberAllowed,
  characterAllowed,
  setCharacterAllowed,
}) {
    const [buttonText, setButtonText] = useState("Copy"); 
    const [password, setPassword] = useState("");

    const generatePassword = useCallback(() => {
      let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (numberAllowed) charset += '0123456789';
      if (characterAllowed) charset += '!@#$%^&*()';
  
      let generatedPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset.charAt(randomIndex);
      }
  
      setPassword(generatedPassword);
    }, [length, numberAllowed, characterAllowed]);
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <button className='px-4 py-2 bg-cyan-500 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300'>
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
            className='slider appearance-none w-full h-2 bg-cyan-200 rounded-lg outline-none opacity-75 active:opacity-100 focus:opacity-100 border-cyan-500 '
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
  );
}

export default PasswordGenerator;
