import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/MainPage/Main';
import UserPage from './Pages/UserPage/UserPage';
import { ThemeProvider } from './Components/ThemeContext';
import Login from './Components/LogIn/Login';

const App: React.FC = () => {

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
