import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  // console.log(testResult);

  const strengthColor = (num) => {
    switch (num) {
      case 50:
        return "#ff8a66";
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

  const strengthIndicator = (num) => {
    switch (num) {
      case 50:
        return "fair";
        break;
      case 75:
        return "strong enough";
        break;
      case 100:
        return "very strong";
        break;
      default:
        return "too weak";
        break;
    }
  };

  const crackTime =
    testResult.crack_times_display.online_throttling_100_per_hour;

  const crackPhrase = (passwordLength) => {
    if (passwordLength === 0) {
      return "please enter a password";
    } else {
      return `It would take ${crackTime} to crack your password.`;
    }
  };

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
      <p className="password-indication">{strengthIndicator(num)}</p>
      <p className="password-crack-time">{crackPhrase(password.length)}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
