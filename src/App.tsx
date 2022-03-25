import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calendar } from './Components/Calendar';
import { Dashboard } from './Components/Dashboard';
import { History } from './Components/History';
import { Home } from './Pages/Home/index';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
