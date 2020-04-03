import React from 'react';
import './App.css';
import axios from "axios";
import NorrisPic from "./Chuck-norris.jpg";


class App extends React.Component {

  state = {
    jokes: [],
    loading: false
  };

  componentDidMount = async () => {
    this.setState({
      loading: true
    });
  
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/random"
    );

    this.setState({
      jokes: response.data.value,
      loading: false
    });
  }

  

  render () {
    return (
      <div>
        <h1> Random Chuck Norris Jokes </h1>
        <img src={NorrisPic} alt="NorrisPic" />
        {/* <NorrisPic loading={this.state.loading} /> */}
        <button onClick={this.componentDidMount}>Generate Random Joke</button>
        <h2>{this.state.jokes}</h2>
      </div>
    );
  }
};

export default App;
