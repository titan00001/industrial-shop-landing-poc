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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.24848750016986!2d88.36462242975648!3d22.58000841580767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b312310683%3A0xbc7a054fb0ee96cb!2sRaja%20Ram%20Arya%20%26%20Sons!5e0!3m2!1sen!2sus!4v1656773777661!5m2!1sen!2sus"
        width={height}
        height={width}
        style={{ border: "0px" }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
