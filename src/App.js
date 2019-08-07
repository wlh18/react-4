import React, {Component} from 'react';

// Import the axios library to use to make http requests
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      people: []
    }
  }

  // lifecycle method to run on the mounting of App
  componentDidMount(){
    // save the promise that axios will return
    const swapiPromise = axios.get('https://swapi.co/api/people/');
    // once we have that promise, execute it
    swapiPromise.then(response => {
      console.log(response)
      // update state with information from the response
      this.setState({
        people: response.data.results
      })
    })
    .catch(error => {
      // use .catch to handle a network error
      console.log(error)
    });

  }

  render(){
    // map through the people on state to return jsx elements for each character
    const mappedCharacters = this.state.people.map((person, index) => {
      return (
        <h2 key={index}>{person.name}</h2>
      )
    });

    return (
      <div>
        <h1>Characters</h1>
        {/* display the mapped characters */}
        {mappedCharacters}
      </div>
    )
  }
};

export default App;