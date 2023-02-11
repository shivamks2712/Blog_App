import GoogleMapReact from "google-map-react";
import { useState } from "react";

export default function MapView() {
  const [renderComp, setRenderComp] = useState(
    <div style={{ height: "80vh", width: "100%" }}></div>
  );
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 16,
  };

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={() => console.log("hii")}
      ></GoogleMapReact> */}
    </div>
  );
}
