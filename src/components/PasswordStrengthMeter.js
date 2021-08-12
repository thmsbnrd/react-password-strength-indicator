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
      case 75:
        return "#06D6A0";
      case 100:
        return "#06D6A0";
      default:
        return "#EF476F";
    }
  };

  const strengthIndicator = (num) => {
    switch (num) {
      case 50:
        return "moyen";
      case 75:
        return "fort";
      case 100:
        return "très fort";
      default:
        return "trop faible";
    }
  };

  const crackTime =
    testResult.crack_times_display.online_no_throttling_10_per_second;

  const translateTime = (crackTime) => {
    if (crackTime.includes("second")) {
      return crackTime.replace("second", "seconde");
    }
    if (crackTime.includes("seconds")) {
      return crackTime.replace("seconds", "seconds");
    }
    if (crackTime.includes("minute")) {
      return crackTime.replace("minute", "minute");
    }
    if (crackTime.includes("minutes")) {
      return crackTime.replace("minutes", "minutes");
    }
    if (crackTime.includes("hour")) {
      return crackTime.replace("hour", "heure");
    }
    if (crackTime.includes("hours")) {
      return crackTime.replace("hours", "heures");
    }
    if (crackTime.includes("day")) {
      return crackTime.replace("day", "jour");
    }
    if (crackTime.includes("days")) {
      return crackTime.replace("days", "jours");
    }
    if (crackTime.includes("month" || "months")) {
      let newString;
      newString = crackTime.replace("month" || "months", "mois");
      if (newString.includes("moiss")) {
        newString = newString.replace("moiss", "mois");
      }
      return newString;
    }
    if (crackTime.includes("year")) {
      return crackTime.replace("year", "an");
    }
    if (crackTime.includes("years")) {
      return crackTime.replace("years", "années");
    }
    if (crackTime.includes("centuries")) {
      return crackTime.replace("centuries", "plusieurs siècles");
    }
  };

  const crackPhrase = (passwordLength) => {
    if (passwordLength === 0) {
      return "Veuillez choisir un mot de passe";
    } else {
      return `Votre mot de passe peut être piraté en ${translateTime(
        crackTime
      )}`;
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
      <p className="password-indication">
        {password.length > 0 ? strengthIndicator(num) : ""}
      </p>
      <p className="password-crack-time">{crackPhrase(password.length)}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
