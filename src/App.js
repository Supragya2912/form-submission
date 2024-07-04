import React from 'react';
import {Route, Routes} from 'react-router-dom';
import FirstForm from './pages/FirstForm/FirstForm';
import SecondForm from './pages/SecondForm/SecondForm'
import ThirdForm from './pages/ThirdForm/ThirdForm'



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<FirstForm />} />
        <Route path="/second" element={<SecondForm />} />
        <Route path="/third" element={<ThirdForm />} />
      </Routes>

    </div>
  );
}

export default App;
