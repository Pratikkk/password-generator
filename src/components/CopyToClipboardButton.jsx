import React from "react";

const CopyToClipboardButton = ({ copyPasswordToClipboard, buttonText }) => {
  return (
    <button
      onClick={copyPasswordToClipboard}
      className="px-7 py-4 bg-cyan-500 text-white shrink-0 my-4 rounded-md hover:bg-cyan-700 hover:scale-150 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 ease-out duration-300"
    >
      {buttonText}
    </button>
  );
};

export default CopyToClipboardButton;