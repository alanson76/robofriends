import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
