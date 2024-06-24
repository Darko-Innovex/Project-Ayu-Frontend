import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientSignInPage from "./pages/PatientSignInPage";
import PatientSignUpPage from "./pages/PatientSignUpPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={ <PatientSignInPage /> }/>
                  <Route path="/PatientSIgnUp" element={ <PatientSignUpPage /> } />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
