import React, { useCallback } from 'react';

function PasswordStrengthIndicator({ passwordStrength }) {
  const getStrengthText = useCallback((strength) => {
    if (strength === 0) return 'Weak';
    if (strength === 1) return 'Fair';
    if (strength === 2) return 'Good';
    if (strength === 3) return 'Strong';
    if (strength === 4) return 'Very Strong';
    return '';
  }, []);

  return (
    <div className="text-center">
      <p>Password Strength: {getStrengthText(passwordStrength)}</p>
      <div className="bg-cyan-300 h-2 rounded-full mt-2">
        <div
          className={`h-2 rounded-full ${
            passwordStrength === 0
              ? 'bg-red-500'
              : passwordStrength === 1
              ? 'bg-yellow-500'
              : 'bg-green-500'
          }`}
        ></div>
      </div>
    </div>
  );
}

export default PasswordStrengthIndicator;