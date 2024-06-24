import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientSignInPage from "./pages/PatientSignInPage";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import PatientForgetPasswordPage from "./pages/PatientForgetPasswordPage";
import DoctorSignInPage from "./pages/DoctorSignInPage";
import DoctorForgetPasswordPage from "./pages/DoctorForgetPasswordPage";
import PatientDashboardPage from "./pages/PatientDashboardPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PatientSignInPage />} />
          <Route path="/DoctorSignIn" element={<DoctorSignInPage />} />
          <Route path="/PatientSignUp" element={<PatientSignUpPage />} />
          <Route
            path="/PatientForgetPassword"
            element={<PatientForgetPasswordPage />}
          />
          <Route
            path="/DoctorForgetPassword"
            element={<DoctorForgetPasswordPage />}
          />
          <Route path="/PatientDashboard" element={<PatientDashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
