import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {

  render() {
    let {mode, toogleMode}=this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News Monkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Main Headlines</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} mx-4`}>
              <input className="form-check-input" onClick={toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
         </div>
        </div>
        </div>
</nav>       
      </div>
    )
  }
}

export default Navbar