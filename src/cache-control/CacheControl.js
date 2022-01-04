import React from "react";
import TileList from "./TileList";
import TileRender from "./TileRender";

export default function CacheControl () {
  const [tilesList, setTilesList] = React.useState([]);
  const [tileToRender, setTileToRender] = React.useState('');

  React.useEffect(async () => {
    const response = await fetch('/api/tiles/cache');
    const tilesList = await response.json();
    setTilesList(tilesList);
  }, []);

  const onTileClicked = (event) => {
    const tile = event.target.innerText;
    setTileToRender(tile);
  };

  const onDeleteAll = () => {
    setTilesList([]);
    setTileToRender('');
  };

  const onDeleteTile = (tile) => {
    setTilesList(tilesList.filter((tileName) => tileName !== tile));
    setTileToRender('');
  };

  const divStyles = {
    paddingLeft: '100px',
  };

  return <div style={divStyles}>
    <h1>Cache control</h1>
    <TileList tiles={tilesList} onTileClicked={onTileClicked} onDeleteAll={onDeleteAll} selected={tileToRender}/>
    <TileRender tile={tileToRender} onDeleteTile={onDeleteTile}/>  
  </div>;
};