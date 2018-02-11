import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import $ from 'jquery'
import './heroes.css'

export default function Heroes(props) {
  const heroes = props.heroes;
  return (
    <div className="Hero">
      <ListGroup className="Hero Hero-box">
        <ListGroupItem className="Hero Hero-name">{heroes.localized_name}</ListGroupItem>

        <ListGroupItem className="Hero Hero-attr">{heroes.primary_attr}</ListGroupItem>

        <ListGroupItem className="Hero Hero-attack">{heroes.attack_type}</ListGroupItem>
      </ListGroup>
    </div>
  );
}

$('.Hero-attr:contains("agi")')
  .closest(".Hero-attr").css('background-color', 'green');