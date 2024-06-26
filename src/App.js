import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientSignInPage from "./pages/patient/PatientSignInPage";
import PatientSignUpPage from "./pages/patient/PatientSignUpPage";
import PatientForgetPasswordPage from "./pages/patient/PatientForgetPasswordPage";
import DoctorSignInPage from "./pages/doctor/DoctorSignInPage";
import DoctorForgetPasswordPage from "./pages/doctor/DoctorForgetPasswordPage";
import PatientDashboardPage from "./pages/patient/PatientDashboardPage";
import PatientMedicalReportPage from "./pages/patient/PatientMedicalReportPage";

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
          <Route
            path="/PatientMedicalReport"
            element={<PatientMedicalReportPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
