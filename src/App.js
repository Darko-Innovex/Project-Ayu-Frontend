import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientLogin from "./pages/PatientLoginPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/" element={ <PatientLogin /> }/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
