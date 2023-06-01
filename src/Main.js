import React, { Component } from 'react'
import Quiz from './questions'
import Footer from './Footer'
import './App.css';

export default class Main extends Component {
  render() {
    return (
      <div className="App">

        <Quiz></Quiz>
        <Footer></Footer>

      </div>
    )
  }
}

