import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div>
      {' '}
      {/* <HookCounterOne />{' '} */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <DataFetching />
    </div>
  );
}

export default App;
