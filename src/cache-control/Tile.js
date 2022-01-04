import React from "react";

export default function Tile (props) {
  let tileStyles = {
    width: 'calc(50% - 150px)',
    padding: '15px',
    marginBottom: '5px',
    background: '#ffffffee',
    border: 'solid 3px darkorchid',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.25s ease-in-out, background-color 1s',
  };

  if (props.selected) {
    tileStyles = {
      ...tileStyles,
      transform: 'translateX(25px)',
      background: '#ffffff',
      border: 'solid 3px darkorange',
    };
  }

  return <div onClick={props.onClick} style={tileStyles}>
    {props.tile}
  </div>;
}