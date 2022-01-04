import React from "react";

export default function TileRender (props) {
  if (!props.tile) return null;

  async function deleteTile () {
    const coords = props.tile.replace(/\.png/, '').split('-');
    await fetch(`/api/tiles/cache/${coords.join('/')}`, { method: 'DELETE' });
    props.onDeleteTile(props.tile);
  };

  const src = `/api/tiles/cache/${props.tile.replace(/-/g, '/').replace(/\.png$/, '')}`;

  const tilePreviewStyles = {
    position: 'fixed',
    top: 'calc(50vh - 192px - 35px)',
    right: 'calc(25vw - 192px - 25px)',
    padding: '25px',
    paddingTop: '0',
    background: '#ffffff',
    border: 'solid 3px darkorange',
    borderRadius: '10px',
  }

  const tileStatusStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'calc(256px * 1.5)',
  };

  const buttonStyles = {
    backgroundColor: 'white',
    color: 'darkorchid',
    border: 'solid 3px darkorchid',
    borderRadius: '5px',
    fontSize: '25px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const imageStyles = {
    width: 'calc(256px * 1.5)',
    height: 'calc(256px * 1.5)',
  };

  return <div style={tilePreviewStyles}>
    <div style={tileStatusStyles}>
      <h2>{props.tile.replace(/-/g, ' ').replace(/\.png$/, '')}</h2>
      <button onClick={deleteTile} style={buttonStyles}>Delete tile</button>
    </div>  
    <img src={src} alt={props.tile} style={imageStyles} />
  </div>;
}
