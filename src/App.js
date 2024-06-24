import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientSignInPage from "./pages/PatientSignInPage";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import PatientForgetPasswordPage from "./pages/PatientForgetPasswordPage";
import PatientDashboardPage from "./pages/PatientDashboardPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={ <PatientSignInPage /> }/>
                  <Route path="/PatientSignUp" element={ <PatientSignUpPage /> } />
                  <Route path="/PatientForgetPasswordPage" element={ <PatientForgetPasswordPage /> }/>
                  <Route path="/PatientDashboard" element={ <PatientDashboardPage /> } />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
