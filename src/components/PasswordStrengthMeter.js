import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  console.log(testResult);

  const changePasswordColor = () => ({
    width: "70%",
    background: "red",
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
