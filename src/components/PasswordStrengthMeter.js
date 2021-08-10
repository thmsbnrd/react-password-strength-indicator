import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const strengthColor = (num) => {
    switch (num) {
      case 50:
        return "#FFD166";
        break;
      case 75:
        return "#06D6A0";
        break;
      case 100:
        return "#06D6A0";
        break;
      default:
        return "#EF476F";
        break;
    }
  };

  console.log(strengthColor(num));

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: `${strengthColor(num)}`,
    height: "7px",
  });

  return (
    <div>
      <div className="progress" style={{ height: "7px" }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
