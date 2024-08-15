import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserNameProvider } from './components/UserName';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import InputName from './components/InputName';
import SecondScreen from './components/SecondScreen';
import Footer from './components/Footer';
import ErrorReportScreen from './components/ErrorReportScreen';
import './App.css';


function App() {
  return (
    <Router>
      <UserNameProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Scoreboard />
                <InputName />
              </>
            } />
            <Route path="/report-error" element={<ErrorReportScreen />} />
            <Route path="/second-screen" element={<SecondScreen />} />
          </Routes>
          <Footer />
        </div>
      </UserNameProvider>
    </Router>
  );
}

export default App;
