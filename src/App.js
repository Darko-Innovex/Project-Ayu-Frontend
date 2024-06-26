import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientSignInPage from "./pages/patient/PatientSignInPage";
import PatientSignUpPage from "./pages/patient/PatientSignUpPage";
import PatientForgetPasswordPage from "./pages/patient/PatientForgetPasswordPage";
import PatientResetPasswordPage from "./pages/patient/PatientResetPasswordPage";
import PatientDashboardPage from "./pages/patient/PatientDashboardPage";
import PatientMedicalReportPage from "./pages/patient/PatientMedicalReportPage";
import DoctorSignInPage from "./pages/doctor/DoctorSignInPage";
import DoctorForgetPasswordPage from "./pages/doctor/DoctorForgetPasswordPage";
import DoctorResetPasswordPage from "./pages/doctor/DoctorResetPasswordPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ----------- patient routes ----------- */}
          <Route path="/" element={<PatientSignInPage />} />
          <Route path="/PatientSignUp" element={<PatientSignUpPage />} />
          <Route
            path="/PatientForgetPassword"
            element={<PatientForgetPasswordPage />}
          />
          <Route
            path="/PatientResetPassword"
            element={<PatientResetPasswordPage />}
          />
          <Route path="/PatientDashboard" element={<PatientDashboardPage />} />
          <Route
            path="/PatientMedicalReport"
            element={<PatientMedicalReportPage />}
          />

          {/* ----------- doctor routes ----------- */}
          <Route path="/DoctorSignIn" element={<DoctorSignInPage />} />
          <Route
            path="/DoctorForgetPassword"
            element={<DoctorForgetPasswordPage />}
          />
          <Route
            path="/DoctorResetPassword"
            element={<DoctorResetPasswordPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
