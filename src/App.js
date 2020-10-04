import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <HashRouter>
      <div className='wrapper'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='content'>
          <Header />
          <div>
            <Route path='/profile' render={ () => <Profile />} />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
