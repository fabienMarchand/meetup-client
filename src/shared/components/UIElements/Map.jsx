import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = (props) => {
  const { center, zoom } = props;
  const mapRef = useRef();
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_BOX_MAPBOX;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    new mapboxgl.Marker({ compareDocumentPosition: center, map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      Map
    </div>
  );
};

export default Map;
