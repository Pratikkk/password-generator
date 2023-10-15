import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(0);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";
    for (let i = 0; i < lenght; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [lenght, numberAllowed, characterAllowed, setPassword]);

   const copyPasswordToClipboard = useCallback(() => {
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0, 99999);
     window.navigator.clipboard.writeText(password)
   }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, lenght, numberAllowed, characterAllowed]);

  return (
    <>
      <div className='flex justify-center items-center flex-col py-8 content-center'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-7 text-cyan-500 '>
          <input
            type='text'
            value={password}
            placeholder='Password'
            readOnly={true}
            className='w-full border-2 border-cyan-500 py-4 px-4 shrink-0'
            ref={passwordRef}
          />
        </div>
        <button onClick={copyPasswordToClipboard} className='px-4 py-2 bg-cyan-500 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-in-out duration-300'>
          Copy
        </button>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              className="slider appearance-none w-full h-2 bg-cyan-200 rounded-lg outline-none opacity-75 active:opacity-100 focus:opacity-100"
              min={6}
              max={100}
              value={lenght}
              onChange={(e) => setLenght(e.target.value)}
            />
            <label htmlFor='lenght'>Length: {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            className="form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500"
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
            className="form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500"
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
