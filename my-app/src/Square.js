import React from 'react';

function Square(props) {
  return (
    <button data-testid="square" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
