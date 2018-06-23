import React from "react";
import Radium from 'radium'; //used to make hover work

const styles = {
  img: {
    height: "200px",
    width: "200px",
    margin: "15px",
    padding: "10px",
    ':hover': {
      boxShadow: "5px 5px 5px #9A7D0A"
    },
  }
}

let dbzCard = props => (
  <img 
    className="clickImg img-fluid" 
    id={props.id}
    alt={props.alt} 
    src={props.image} 
    style={styles.img}
    onClick={() => {
      props.selectImage(props.id);
    }}
  />
);

dbzCard = Radium(dbzCard);

export default dbzCard; 