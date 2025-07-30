import React, { useState } from 'react';
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const Employees = EmployeesData;
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <label>SELECT A THEME </label>
        <select onChange={(e) => setTheme(e.target.value)} value={theme}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>

      {/* Remove theme prop here */}
      <EmployeesList employees={Employees} />
    </ThemeContext.Provider>
  );
}

export default App;
