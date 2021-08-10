import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {
  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h3 className="text-center my-5">Admin Password</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="password" />
          <PasswordStrengthMeter />
        </div>
      </div>
    </div>
  );
}

export default App;
