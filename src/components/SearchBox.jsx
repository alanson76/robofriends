import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='text'
          placeholder='search robots ... '
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
