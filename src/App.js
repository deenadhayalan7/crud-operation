// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DeleteRegister from './delete';

import Get from './put';
import Home from './post';
import Update from './put';
import View from './get';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/get" element={<View/>}/>
      <Route path="/put" element={<Update/>}/>
    </Routes>
    // <div>
    //   <Put/>
    // </div>
  );
}

export default App;
