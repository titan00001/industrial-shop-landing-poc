import * as React from "react";
import MapContainer from "../../Component/MapContainer";

interface IMapSandboxProps {}

const MapSandbox: React.FunctionComponent<IMapSandboxProps> = (props) => {
  return (
    <>
      <MapContainer height="600px" width="450px" />
    </>
  );
};

export default MapSandbox;
