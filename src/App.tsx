import React from 'react';

import './App.css';

import CardList from './components/card/CardList'
import DropdownMenu from './components/navbar/DropdownMenu';
import Navbar from './components/navbar/Navbar';
import NavItem from './components/navbar/NavItem';

import { ReactComponent as HamburgerIcon } from './icons/hamburger.svg';


function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<HamburgerIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      
      <CardList />

    </div>
  );
}

export default App;
