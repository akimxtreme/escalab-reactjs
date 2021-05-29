import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/home/home.component';
import CharacterPage from './pages/character/character.component'

// Components
import Header from './components/header/header.component';
//import Footer from './components/footer/footer.component';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/character" component={CharacterPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
