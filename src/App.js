import React, { Component } from 'react';
import './App.css';
import  GenerateSimpsons  from  './generateSimpsons';
import  DisplaySimpson  from  './displaySimpsons';

const sampleSimpson = {
    quote:  'Shoplifting is a victimless crime, like punching someone in the dark.',
    character: 'Nelson Muntz',
    image:  'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
};


class App extends Component {

	        constructor(props) {
  super(props);
  this.state = {
    // on peut mettre notre sampleEmployee par défaut
    // afin d'avoir toujours un employé d'affiché
    simpson: sampleSimpson
  };
}

getSimpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
	   simpson: data[0]
        })
    });
}



  render() {
    return (
      <div>
	<GenerateSimpsons  selectSimpson={() =>  this.getSimpson()}  />
        <DisplaySimpson  simpson={this.state.simpson}  />
      </div>
    );
  }
}

export default App;
