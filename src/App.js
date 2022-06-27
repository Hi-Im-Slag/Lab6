import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }

}

export default App;
