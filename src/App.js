import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/registration/SignInPage";
import PatientSignUpPage from "./pages/registration/PatientSignUpPage";
import PatientForgetPasswordPage from "./pages/patient/PatientForgetPasswordPage";
import PatientResetPasswordPage from "./pages/patient/PatientResetPasswordPage";
import PatientDashboardPage from "./pages/patient/PatientDashboardPage";
import PatientMedicalReportPage from "./pages/patient/PatientMedicalReportPage";
import DoctorForgetPasswordPage from "./pages/doctor/DoctorForgetPasswordPage";
import DoctorResetPasswordPage from "./pages/doctor/DoctorResetPasswordPage";
import DoctorDashboardPage from "./pages/doctor/DoctorDashboardPage";
import DoctorPatientNfcCardScanPage from "./pages/doctor/DoctorPatientNfcCardScanPage";
import DoctorPatientDetailPage from "./pages/doctor/DoctorPatientDetailPage";
import HospitalForgetPasswordPage from "./pages/hospital/HospitalForgetPasswordPage";
import HospitalResetPasswordPage from "./pages/hospital/HospitalResetPasswordPage";
import HospitalDashboardPage from "./pages/hospital/HospitalDashboardPage";
import AdminForgetPasswordPage from "./pages/admin/AdminForgetPasswordPage";
import AdminResetPasswordPage from "./pages/admin/AdminResetPasswordPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import PatientAppointmentPage from "./pages/patient/PatientAppointmentPage";
import DoctorDoctorReviewPage from "./pages/doctor/DoctorDoctorReviewPage";
import PatientDoctorReviewPage from "./pages/patient/PatientDoctorReviewPage";
import DoctorOldPatientPage from "./pages/doctor/DoctorOldPatientPage";
import HealthCardManagementPage from "./pages/admin/HealthCardManagementPage";
import AdminHospitalManagePage from "./pages/admin/AdminHospitalManagePage";
import PatientManagementPage from "./pages/hospital/PatientManagementPage";
import AdminPatientManagePage from "./pages/admin/AdminPatientManagePage";
import HospitalAppointmentManagementPage from "./pages/hospital/HospitalAppointmentManagementPage";
import HospitalDoctorManagePage from "./pages/hospital/HospitalDoctorManagePage";
import HospitalSchedulePage from "./pages/hospital/HospitalSchedulePage";

// ----------------------------------css----------------------------------

// import "../src/css/Hover/PatientHover.css";

import "../src/css/Hover/PatientHover.css";

// ----------------------------------css----------------------------------

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ----------- patient routes ----------- */}
          <Route path="/" element={<SignInPage />} />
          <Route path="/PatientSignUp" element={<PatientSignUpPage />} />
          <Route
            path="/PatientForgetPassword"
            element={<PatientForgetPasswordPage />}
          />
          <Route
            path="/PatientResetPassword"
            element={<PatientResetPasswordPage />}
          />
          <Route
            path="/PatientDashboard/:userId"
            element={<PatientDashboardPage />}
          />
          <Route
            path="/PatientMedicalReport/:userId"
            element={<PatientMedicalReportPage />}
          />
          <Route
            path="/PatientAppointment/:userId"
            element={<PatientAppointmentPage />}
          />
          <Route
            path="/PatientDoctorReviewPage/:userId"
            element={<PatientDoctorReviewPage />}
          />

          {/* ----------- doctor routes ----------- */}
          <Route
            path="/DoctorForgetPassword"
            element={<DoctorForgetPasswordPage />}
          />
          <Route
            path="/DoctorResetPassword"
            element={<DoctorResetPasswordPage />}
          />
          <Route
            path="/DoctorDashboard/:doctorId"
            element={<DoctorDashboardPage />}
          />
          <Route
            path="/DoctorPatientNfcCardScanPage"
            element={<DoctorPatientNfcCardScanPage />}
          />
          <Route
            path="/DoctorPatientDetailPage/:patientId"
            element={<DoctorPatientDetailPage />}
          />
          <Route
            path="/DoctorDoctorReviewPage"
            element={<DoctorDoctorReviewPage />}
          />
          <Route
            path="/DoctorOldPatientPage"
            element={<DoctorOldPatientPage />}
          />

          {/* ----------- hospital routes ----------- */}
          <Route
            path="/HospitalForgetPassword"
            element={<HospitalForgetPasswordPage />}
          />
          <Route
            path="/HospitalResetPassword"
            element={<HospitalResetPasswordPage />}
          />
          <Route
            path="/HospitalDashboard/:hospitalId"
            element={<HospitalDashboardPage />}
          />
          <Route
            path="/HospitalPatientManagement"
            element={<PatientManagementPage />}
          />
          <Route
            path="/HospitalAppointmentManagementPage"
            element={<HospitalAppointmentManagementPage />}
          />
          <Route
            path="/HospitalDoctorManagement"
            element={<HospitalDoctorManagePage />}
          />
          <Route
            path={"/HospitalSchedule"}
            element={<HospitalSchedulePage />}
          />

          {/* ----------- admin routes ----------- */}
          <Route
            path="/AdminForgetPassword"
            element={<AdminForgetPasswordPage />}
          />
          <Route
            path="/AdminResetPassword"
            element={<AdminResetPasswordPage />}
          />
          <Route
            path="/AdminDashboard/:adminId"
            element={<AdminDashboardPage />}
          />
          <Route
            path="/AdminPatientManage"
            element={<AdminPatientManagePage />}
          />
          <Route
            path="/AdminHospitalManage"
            element={<AdminHospitalManagePage />}
          />
          <Route
            path="/HealthCardManage"
            element={<HealthCardManagementPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
