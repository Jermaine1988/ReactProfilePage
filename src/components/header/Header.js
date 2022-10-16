import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Nav from "../nav/Nav";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from '../contact/Contact';



class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
      
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
        
        </div>
      </HashRouter>
    );
  }
}

export default Header;