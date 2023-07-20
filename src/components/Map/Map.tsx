import { FC, useState, useMemo } from "react";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import "./style.css";
import L, { Map as LeafletMap } from "leaflet";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { getParsedRoute } from "../../helpers";

export const Map: FC = () => {
  const { geometry } = useAppSelector((state) => state.mapReducer);
  const { selectedRoute } = useAppSelector((state) => state.routeReducer);
  const [map, setMap] = useState<LeafletMap | null>(null);

  const parsedRoute = useMemo(
    () => (geometry && selectedRoute ? getParsedRoute(selectedRoute) : null),
    [geometry, selectedRoute]
  );

  const polylineHandlers = useMemo(
    () => ({
      add(e: L.LeafletEvent) {
        if (!map || !geometry) return;

        // I think we can get it from e.sourceTarget._bounds..., but is it a good practice??
        const polylineBounds = L.polyline(geometry).getBounds();
        map.fitBounds(polylineBounds);
      },
    }),
    [geometry, map]
  );

  return (
    <MapContainer
      className="rootContainer"
      id="map"
      ref={setMap}
      center={[59.95469859363157, 30.34469510244506]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parsedRoute?.map((val) => (
        <Marker key={`${val.lat}${val.lng}`} position={val} draggable></Marker>
      ))}
      {geometry && (
        <Polyline
          pathOptions={{
            color: "blue",
            weight: 3,
            opacity: 0.7,
            lineJoin: "round",
          }}
          positions={geometry}
          eventHandlers={polylineHandlers}
        />
      )}
    </MapContainer>
  );
};
