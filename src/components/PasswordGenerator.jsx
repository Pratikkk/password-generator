import React from "react";

const PasswordGenerator = ({ generatePassword }) => {
  return (
    <button
      className="px-4 py-2 bg-cyan-800 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300"
      onClick={generatePassword}
    >
      Randomize
    </button>
  );
};

export default PasswordGenerator;