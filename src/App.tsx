import React from 'react';
import HomePage from './components/Home/HomePage';
import { CustomNavbar } from './components/Home/CustomNavbar';

const App: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <HomePage />

    </div>
  );
};

export default App;


