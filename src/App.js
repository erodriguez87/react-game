import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import DbzCard from "./components/DbzCard";
import cardData from "./cards.json"; 
import dbzCard from './components/DbzCard';

//es6 version of a shuffle. takes the characters array that is passed in and loops through it. it assigns a new random position j and puts character i into it. then moves on.
function remix(characters) {
  for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters;
}

class App extends Component {

  state = {
    cardData,
    alt: '',
    quote:'I forgot how to play... try clicking something and maybe i remember',
    Main,
    userSelect: '',
    userScore: 0,
    topScore: 0
  }
  

  render() {
    const remixCards = remix(cardData);
    console.log(remixCards)
    return (
      <div className="App">
        <Nav userScore={this.state.userScore} topScore={this.state.topScore} alt={this.state.alt} quote={this.state.quote}/>
        <Header />
        <Main>
          {remixCards.map(card =>
            <DbzCard key={card.id}
              {...card} //destructured way of getting the cards to show up
              selectImage={(id) => {
                //grab objects from the json and update react components
                this.setState({userSelect: id})
                this.setState({alt: card.alt})
                this.setState({quote: card.quote})

                this.setState((prevState) => {
                  if (this.state.userSelect === prevState.userSelect) {
                    console.log('wrong')
                    console.log('userScore: ' + this.state.userScore);
                    return ({userScore : 0})
                  } else {
                    console.log('userScore: ' + this.state.userScore);
                    return ({userScore : this.state.userScore + 1})
                  }
                })
                // update the top score
                this.setState({topScore : this.state.topScore + 1})
              }}
            />
          )}
        </Main>
      </div>
    );
  }
}

export default App;