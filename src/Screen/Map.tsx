import * as React from "react";
import MapContainer from "../Component/MapContainer";

interface IMapSandboxProps {}

const MapSandbox: React.FunctionComponent<IMapSandboxProps> = (props) => {
  return (
    <>
      <MapContainer height="200px" width="200px" />
    </>
  );
};

export default MapSandbox;
