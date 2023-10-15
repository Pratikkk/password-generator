import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthIndicator({ password }) {
  const calculatePasswordStrength = (password) => {
    const result = zxcvbn(password);
    return {
      score: result.score,
      feedback: result.feedback.suggestions,
    };
  };

  const getStrengthText = (score) => {
    if (score === 0) {
      return "Very Weak";
    } else if (score === 1) {
      return "Weak";
    } else if (score === 2) {
      return "Medium";
    } else if (score === 3) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

if (password) {
    const passwordStrength = calculatePasswordStrength(password);


  return (
    <div className="mt-4">
      <p className="text-lg font-semibold text-cyan-600">
        Password Strength: {getStrengthText(passwordStrength.score)}
      </p>
      <ul className="mt-2">
        {passwordStrength.feedback.map((message, index) => (
          <li key={index} className="text-red-500">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );} else {
    return <div className="mt-4">Generating Password...</div>
  }
}

export default PasswordStrengthIndicator;
