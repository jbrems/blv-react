import React from "react";
import Tile from "./Tile";

export default function TileList (props) {
  async function deleteAll () {
    await fetch('/api/tiles/cache', { method: 'DELETE' });
    props.onDeleteAll();
  };

  const tileStatusStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'calc(50% - 115px)',
    marginBottom: '10px',
  };

  const tileStatusSpanStyles = {
    fontSize: '30px',
    WebkitTextStroke: '1px white',
  };

  const buttonStyles = {
    backgroundColor: 'darkorchid',
    color: 'white',
    border: 'solid 3px white',
    borderRadius: '5px',
    fontSize: '25px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return <div className="tile-list">
    <div style={tileStatusStyles}>
      <span style={tileStatusSpanStyles}>{props.tiles.length} tiles have been cached</span>
      <button onClick={deleteAll} style={buttonStyles}>Delete all</button>  
    </div>
    { props.tiles.map(tile => <Tile key={tile} tile={tile} onClick={props.onTileClicked} selected={tile === props.selected} />) }
  </div>;
}