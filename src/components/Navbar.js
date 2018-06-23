import React from "react";

const styles = {
  logo: {
    fontSize: "32px"
  },
  guide: {
    fontSize: "24px"
  }
}

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="scoreboard">
      <h4>User Score: <span className="navbar-text" id="userScore">{props.userScore}</span></h4>
      <h4>Top Score: <span className="navbar-text" id="topScore">{props.topScore}</span></h4>
    </div>

    <div className="quote mx-auto" style={styles.guide}>{props.quote}</div>

    <h1 className="navbar-tag" id="alt" style={styles.logo} href="#">{props.alt}</h1>
    
  </nav>
); 

export default Nav;