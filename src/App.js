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
  artNum=9;

 render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} toogleMode={this.toogleMode}/>
         <Routes>
          <Route exact path="/" element={<Heading key="heading" mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/business" element={<News key="business"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Business" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Entertainment" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/general" element={<News key="genral"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="General" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/health" element={<News key="health"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Health" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/science" element={<News key="science"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Science" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/sports" element={<News key="sports"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Sports" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          <Route exact path="/technology" element={<News key="technology"  mode={this.state.mode} mode2={this.state.mode2} newsSize={this.artNum} country={'in'} category="Technology" akey="90e7f116117d4e6aa91f10765c013282"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
