// import React from "react";

// function PasswordSettings({
//   length,
//   setLength,
//   numberAllowed,
//   setNumberAllowed,
//   characterAllowed,
//   setCharacterAllowed,
// }) {
//   return (
//     <div className="flex text-sm gap-x-2">
//       <div className="flex items-center gap-x-1">
//         <input
//           type="range"
//           className="slider appearance-none w-full h-2 bg-cyan-200 rounded-lg outline-none opacity-75 active:opacity-100 focus:opacity-100 border-cyan-500"
//           min={6}
//           max={100}
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//         />
//         <label htmlFor="length">Length: {length}</label>
//       </div>

//       <div className="flex items-center gap-x-1">
//         <input
//           className="form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500"
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           onChange={() => {
//             setNumberAllowed((prev) => !prev);
//           }}
//           id="numberInput"
//         />
//         <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input
//           className="form-checkbox h-5 w-5 text-cyan-500 transition duration-150 ease-in-out rounded-md focus:ring-cyan-500"
//           type="checkbox"
//           defaultChecked={characterAllowed}
//           id="characterInput"
//           onChange={() => {
//             setCharacterAllowed((prev) => !prev);
//           }}
//         />
//         <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
//   );
// }

// export default PasswordSettings;
