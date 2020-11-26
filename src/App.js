import './App.css';
import { Component } from 'react';
import MyForm from './components/MyForm'
import ValidationForm from './components/ValidationForm';
import FetchRandomUser from './components/FetchRandomUser';

class App extends Component {
  state = {
    visible: true
  };

  render () {
    return (
      <div className = "App">
        <FetchRandomUser />
      </div>
    )
  }
}

export default App;
