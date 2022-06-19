import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Heading from './Heading';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  mode;
  mode2
  apiKey="3f21500c6c654b198f7104ceadc8c83e";
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
  artNum=9;

  setProgress=(progress)=>{
    this.setState({progress : progress})
  }

 render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>
        <Router>
        <Navbar mode={this.state.mode} toogleMode={this.toogleMode}/>
         <Routes>
          {/* Here the api key is changed to the secure account api key */}
          <Route exact path="/" element={<Heading setProgress={this.setProgress} key="heading" mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} akey={this.apiKey}/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Business" akey={this.apiKey}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Entertainment" akey={this.apiKey}/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="genral"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="General" akey={this.apiKey}/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Health" akey={this.apiKey}/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Science" akey={this.apiKey}/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Sports" akey={this.apiKey}/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Technology" akey={this.apiKey}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
