import React from 'react';
import './App.css';

import LoginScreen1 from './components/LoginScreen1';
import LoginScreen2 from './components/LoginScreen2';
import LoginScreen3 from './components/LoginScreen3';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='screen'>
          <LoginScreen1 />
          <LoginScreen2 />
          <LoginScreen3 />
        </div>
      </div>
    </div>
  );
}

export default App;
