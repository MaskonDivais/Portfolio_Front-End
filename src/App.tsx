import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/MainPage/Main';
import UserPage from './Pages/UserPage/UserPage';

import { ThemeProvider } from './Components/ThemeContext';
import Login from './Components/LogIn/Login';

const App: React.FC = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      <Router>

        {isAuthenticated ?
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/user" element={<UserPage />} />

          </Routes>
          : <Login setIsAuthenticated={setIsAuthenticated} />}

      </Router>
    </ThemeProvider>
  );
};

export default App;
