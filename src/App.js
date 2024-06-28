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
import HospitalSignInPage from "./pages/hospital/HospitalSignInPage";
import HospitalForgetPasswordPage from "./pages/hospital/HospitalForgetPasswordPage";
import HospitalResetPasswordPage from "./pages/hospital/HospitalResetPasswordPage";
import AdminSignInPage from "./pages/admin/AdminSignInPage";
import AdminSignUpPage from "./pages/admin/AdminSignUpPage";
import AdminForgetPasswordPage from "./pages/admin/AdminForgetPasswordPage";
import AdminResetPasswordPage from "./pages/admin/AdminResetPasswordPage";
import DoctorPatientDetailPage from "./pages/doctor/DoctorPatientDetailPage";
import DoctorPatientNfcCardScanPage from "./pages/doctor/DoctorPatientNfcCardScanPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ----------- patient routes ----------- */}
          <Route path="/P" element={<PatientSignInPage />} />
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
          <Route
            // path="/DoctorPatientDetailPage"
            path="/"
            element={<DoctorPatientDetailPage />}
          />
          <Route
            path="/DoctorPatientNfcCardScanPage"
            element={<DoctorPatientNfcCardScanPage />}
          />

          {/* ----------- hospital routes ----------- */}
          <Route path="/HospitalSignIn" element={<HospitalSignInPage />} />
          <Route
            path="/HospitalForgetPassword"
            element={<HospitalForgetPasswordPage />}
          />
          <Route
            path="/HospitalResetPassword"
            element={<HospitalResetPasswordPage />}
          />

          {/* ----------- admin routes ----------- */}
          <Route path="/AdminSignIn" element={<AdminSignInPage />} />
          <Route path="/AdminSignUp" element={<AdminSignUpPage />} />
          <Route
            path="/AdminForgetPassword"
            element={<AdminForgetPasswordPage />}
          />
          <Route
            path="/AdminResetPassword"
            element={<AdminResetPasswordPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
