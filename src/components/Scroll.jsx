import React from 'react';

function Scroll(props) {
  // console.log(props.children)
  return (
    <div style={{ overflowY: 'scroll', height: '900px' }}>{props.children}</div>
  );
}

export default Scroll;
