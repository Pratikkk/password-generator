import { useState } from "react";

function App() {
  const [lenght, setLenght] = useState(0);
  const [numberAllowed , setNumberAllowed] = useState(0);
  const  [characterAllowed , setCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("");

  return <h1 className='text-4xl text-center'>Password Generator</h1>;
}

export default App;
