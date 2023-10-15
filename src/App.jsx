import React from "react";

import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import PasswordSettings from "./components/PasswordSettings";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div>
      <PasswordGenerator />
      <PasswordStrengthIndicator />
      <PasswordSettings />
    </div>
  );
}

export default App;
