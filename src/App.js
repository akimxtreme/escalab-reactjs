import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/home/home.component';
import EpisodesPage from './pages/episodes/episodes.component';
import XmenPage from './pages/xmen/xmen.component';
import EvilPage from './pages/evil-group/evil-group.component';
import NotFoundPage from './pages/not-found/not-found.component';

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
            <Route path="/evil-group" component={EvilPage} />
            <Route path="/x-men" component={XmenPage} />
            <Route path="/episodes" component={EpisodesPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
