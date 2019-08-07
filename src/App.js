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
    // save the promise axios returns
    const swapiPromise = axios.get('https://swapi.com/api/people');

  }

  render(){
    // map through the people on state to return 
    return (
      <div>

      </div>
    )
  }
};

export default App;