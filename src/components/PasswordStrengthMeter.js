import React from "react";

const PasswordStrengthMeter = () => {
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
