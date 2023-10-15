import React, { useState, useEffect, useCallback } from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

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

  const calculatePasswordStrength = useCallback(() => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*()]/.test(password)) score++;

    return score;
  }, [password]);

  const getStrengthText = useCallback((strength) => {
    if (strength === 0) return 'Weak';
    if (strength === 1) return 'Fair';
    if (strength === 2) return 'Good';
    if (strength === 3) return 'Strong';
    if (strength === 4) return 'Very Strong';
    return '';
  }, []);

  useEffect(() => {
    calculatePasswordStrength();
  }, [password, calculatePasswordStrength]);

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength());
  }, [passwordStrength, calculatePasswordStrength]);

  return (
    <>
      <PasswordGenerator
        length={length}
        setLength={setLength}
        numberAllowed={numberAllowed}
        setNumberAllowed={setNumberAllowed}
        characterAllowed={characterAllowed}
        setCharacterAllowed={setCharacterAllowed}
        generatePassword={generatePassword}
      />
      <PasswordStrengthIndicator passwordStrength={passwordStrength} />
      <div className="text-center mt-4">
        <p>Generated Password: {password}</p>
      </div>
    </>
  );
}

export default App;