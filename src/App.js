import { useState } from "react";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Nouveau Mot de Passe</h3>
        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
}

export default App;
