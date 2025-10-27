import 'maplibre-gl/dist/maplibre-gl.css';

import { RMap, RMarker } from 'maplibre-react-components';
import { useState } from 'react';

import type { MapLayerMouseEvent } from 'maplibre-gl';
const mountain: [number, number] = [6.4546, 46.1067];

function App() {
  const [markerPosition, setMarkerPosition] = useState<null | [number, number]>(
    null
  );

  const handleClick = (e: MapLayerMouseEvent) =>
    setMarkerPosition(e.lngLat.toArray());
  return (
    <RMap
      minZoom={6}
      onClick={handleClick}
      initialCenter={mountain}
      initialZoom={8}
      mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
    >
      <RMarker longitude={mountain[0]} latitude={mountain[1]} />
      {markerPosition && (
        <RMarker
          longitude={markerPosition[0]}
          latitude={markerPosition[1]}
          draggable
          onDragEnd={(e) => setMarkerPosition(e.lngLat.toArray())}
        />
      )}
    </RMap>
  );
}

export default App;
