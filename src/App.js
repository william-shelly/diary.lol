import React, { useState } from 'react';
import Homepage from './components/Homepage';
import AddActivity from './components/AddActivity';
import './App.css';

const App = () => {
  const [screen, setScreen] = useState('homepage')
  return (
    <div className="App">
      {screen === 'homepage' && <Homepage setScreen={setScreen} />}
      {screen === 'AddActivity' && <AddActivity setScreen={setScreen} />}
    </div>
  );
}

export default App;
