import React from "react";

const PasswordStrengthMeter = ({ passwordStrength }) => {
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

  return (
    <p className="text-lg font-semibold text-cyan-600">
      Password Strength: {getStrengthText(passwordStrength.score)}
    </p>
  );
};

export default PasswordStrengthMeter;