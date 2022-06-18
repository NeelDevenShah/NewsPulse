import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  mode;
  mode2
  constructor(){
    super();
    console.log("In app.js");
    this.state={
     mode: "light",
     mode2: "dark",
    }
    console.log("out of the app.js");
  }

  toogleMode=()=>{
    if(this.state.mode==="light"){
      console.log("The colour changed to dark");
      document.body.style.backgroundColor="#6e6868"
      this.setState({mode: "dark"});
      this.setState({mode2: "light"});
    }
    else{
      console.log("The colour changed to light");
      document.body.style.backgroundColor="#FFFFFF"
      this.setState({mode: "light"});
      this.setState({mode2: "dark"})
    }
  }

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toogleMode={this.toogleMode}/>
        <News mode={this.state.mode} mode2={this.state.mode2}/>
      </div>
    )
  }
}
