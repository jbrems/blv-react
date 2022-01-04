import React from "react";

export default function Demo () {

  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.body.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    script.addEventListener('load', () => {
      const map = L.map('map').setView([51.052971, 4.385125], 14);
      L.tileLayer('/api/tiles/{z}/{x}/{y}').addTo(map);
    }); 
    document.body.appendChild(script);

    return () => { 
      document.body.removeChild(script);
      document.body.removeChild(link); 
    };
  }, []);

  const mapStyles = {
    height: '100vh',
    width: '100vw',
  }

  return <div id="map" style={mapStyles} ></div>;
}