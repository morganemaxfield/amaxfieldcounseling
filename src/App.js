import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import Appointment from './pages/Appointment';
import Specialties from './pages/Specialties';
import FeesAndInsurance from './pages/FeesAndInsurance';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides consistent baseline styling */}
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/feesAndInsurance" element={<FeesAndInsurance />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;