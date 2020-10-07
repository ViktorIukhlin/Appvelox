import React from 'react';
import './App.css';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import MyNotes from './components/Profile/MyNotes/MyNotes';

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
            <Route exact path='/profile' render={ () => <Profile />} />
            <Route path='/profile/myNotes'  render={ () => <MyNotes store={props.store}/>}/>
            <Redirect from='/' to='/profile'/>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
