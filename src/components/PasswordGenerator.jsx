import React, { useState, useRef, useEffect, useCallback } from "react";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import PasswordSettings from "./PasswordSettings";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(0);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    // ... existing generatePassword logic ...
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
    // ... existing copyPasswordToClipboard logic ...
    if (passwordRef.current) {
        passwordRef.current.select();
        passwordRef.current.setSelectionRange(0, 99999);
        window.navigator.clipboard.writeText(password);
        setButtonText("Copied !");
      }
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="h-screen dark:bg-slate-800 max-h-md dark:text-white fonts-poppins flex justify-center items-center flex-col py-8 content-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-7 text-cyan-500">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly={true}
          className="w-full border-2 border-cyan-500 py-4 px-4 shrink-0 rounded-md focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300"
          ref={passwordRef}
        />
        <PasswordStrengthIndicator password={password} />
      </div>
      <button
        onClick={copyPasswordToClipboard}
        className="px-7 py-4 bg-cyan-500 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300"
      >
        {buttonText}
      </button>
      <button
        className="px-4 py-2 bg-cyan-800 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active-bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300"
        onClick={generatePassword}
      >
        Randomize
      </button>
      <PasswordSettings
        length={length}
        setLength={setLength}
        numberAllowed={numberAllowed}
        setNumberAllowed={setNumberAllowed}
        characterAllowed={characterAllowed}
        setCharacterAllowed={setCharacterAllowed}
      />
    </div>
  );
}

export default PasswordGenerator;
