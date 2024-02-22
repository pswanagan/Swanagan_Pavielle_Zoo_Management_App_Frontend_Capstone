import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimalList from './components/AnimalList.jsx';
import AddAnimal from './components/AddAnimal.jsx';
import KeeperList from './components/KeeperList.jsx';
import AddKeeper from './components/AddKeeper.jsx';
import Home from './components/Home.jsx';

import './App.css';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/animallist' element={<AnimalList />} />
          <Route path='/addanimal'element={<AddAnimal />} />
          <Route path='/keeperlist' element={<KeeperList />} />
          <Route path='/addkeeper' element={<AddKeeper />} />
        </Routes>
     
    </Router>
  );
}

export default App;