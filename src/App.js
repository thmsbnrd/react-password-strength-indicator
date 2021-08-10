import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {
  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Admin Password</h3>
        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="password"
          />
        </div>
        <PasswordStrengthMeter />
      </div>
    </div>
  );
}

export default App;
