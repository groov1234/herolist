import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Heroes(props) {
  const heroes = props.heroes;
  return (
    <div className="HeroBox">
      <ListGroup className="Heroes">
        <ListGroupItem className="Hero-name">{heroes.localized_name}</ListGroupItem>

        <ListGroupItem className="Hero-attr">{heroes.primary_attr}</ListGroupItem>

        <ListGroupItem className="Hero-attack">{heroes.attack_type}</ListGroupItem>
      </ListGroup>
    </div>
  );
}
