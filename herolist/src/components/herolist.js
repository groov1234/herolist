import React, { Component } from 'react';
import axios from 'axios';
import Heroes from './heroes';



class HeroList extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    axios
      .get('https://api.opendota.com/api/heroes')
      .then(response => {
        this.setState({ heroes: response.data });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
  render() {
    return (
      <div className="Heroes">
        <div className="HeroCards">
          {this.state.heroes.map(heroes => {
            return <Heroes heroes={heroes} />;
          })}
        </div>
      </div>
    );
  }
}


export default HeroList;
