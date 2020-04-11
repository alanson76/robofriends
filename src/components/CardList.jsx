import React, { Component } from 'react';

import Card from './Card';

export class CardList extends Component {
  renderRobots = () =>
    this.props.robots.map(({ id, name, email }, index) => {
      return <Card key={index} id={id} name={name} email={email} />;
    });

  render() {
    return <div>{this.renderRobots()}</div>;
  }
}

export default CardList;
