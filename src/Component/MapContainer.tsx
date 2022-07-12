import * as React from "react";

interface IMapContainerProps {
  height: string;
  width: string;
}

const MapContainer: React.FunctionComponent<IMapContainerProps> = (props) => {
  const { height, width } = props;
  return (
    <div style={{ maxHeight: height, maxWidth: width }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7349.745705018977!2d88.36013824316984!3d22.57945381449607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc7a054fb0ee96cb!2sRaja%20Ram%20Arya%20%26%20Sons!5e0!3m2!1sen!2sus!4v1657652270981!5m2!1sen!2sus"
        width={width}
        height={height}
        style={{ border: "0px" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
