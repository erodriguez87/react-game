import React from "react";

const styles = {
  main: {
    paddingTop: "25px",
    background: "#FBFCFC",
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    padding: "10px",
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflow: "auto",
  }
}

const Main = props => <div className="main" style={styles.main}>{props.children}</div>;

export default Main;