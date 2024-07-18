import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
 
  state ={
    progress: 0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <div style={{ background: '#373b3e' }}>
          <Router>
            <Navbar />
            <LoadingBar
            height={3}
        color='#f11946'
        progress={this.state.progress}
      />
            <Routes>
              <Route
                path="/:country/:category"
                element={<News setProgress={this.setProgress}/>}
              />
              <Route
                path="/"
                element={<News  setProgress={this.setProgress} country="in" category="general" />}
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
