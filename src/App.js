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
import { useState } from 'react';

const App=()=>{
  const [mode, setMode]=useState("light");
  const [mode2, setMode2]=useState("dark");
  let apiKey="90e7f116117d4e6aa91f10765c013282";

  const toogleMode=()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#6e6868"
      setMode("dark")
      setMode2("light")
    }
    else{
      document.body.style.backgroundColor="#FFFFFF"
      setMode("light")
      setMode2("dark")
    }
  }
  let artNum=9;
  // const setProgress=(progress)=>{
  //   setState({progress : progress})
  // }
  const [progress, setProgress]=useState(0);

    return (
      <div>
        <LoadingBar
        color='#f11946'
        setProgress={progress}/>
        <Router>
        <Navbar mode={mode} toogleMode={toogleMode}/>
         <Routes>
          {/* Here the api key is changed to the secure account api key */}
          <Route exact path="/" element={<Heading setProgress={setProgress} key="heading" mode={mode} mode2={mode2} newsSize={artNum} country={'in'} akey={apiKey}/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Business" akey={apiKey}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Entertainment" akey={apiKey}/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} key="genral"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="General" akey={apiKey}/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Health" akey={apiKey}/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Science" akey={apiKey}/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Sports" akey={apiKey}/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology"  mode={mode} mode2={mode2} newsSize={artNum} country={'in'} category="Technology" akey={apiKey}/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App