import { useState } from "react";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";
import "./App.css";
import { ReactComponent as VisibilityOn } from "./icons/visibility_black_24dp.svg";
import { ReactComponent as VisibilityOff } from "./icons/visibility_off_black_24dp.svg";

function App() {
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Nouveau Mot de Passe</h3>
        <div className="form-group mb-1 password-input">
          <input
            type={passwordVisibility ? "text" : "password"}
            className="form-control shadow-none"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordVisibility ? (
            <VisibilityOn
              className="toggle-password"
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            />
          ) : (
            <VisibilityOff
              className="toggle-password"
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            />
          )}
        </div>
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
}

export default App;
