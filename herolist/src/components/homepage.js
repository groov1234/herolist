import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HomePage = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Dota 2 Heroes List</h1>
        <p className="lead">
          Dota 2 is the Sequel to Warcraft 3's MOD Dota
          (Defense of the Ancient)
          There are currently 115 heroes available in Dota 2.
        </p>
        <hr className="my-2" />
        <p>
          Here you will find the Top Guide for each Hero.
        </p>
        <p className="lead">
          <Button color="danger">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default HomePage;