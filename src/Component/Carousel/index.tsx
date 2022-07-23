import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Svg from "Component/Svg";
import "./carousel.style.scss";
import Button from "Component/Button";
import useIsMobileViewport from "hooks/useIsMobileViewport";

export interface ICarouselProps {
  children: React.ReactNode;
}

interface IArrowProps {
  onClick?: () => void | Promise<void>;
  classes?: string;
}

const PrevArrow: React.FunctionComponent<IArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <Button secondary action={onClick}>
      <Svg name="arrow-left" />
    </Button>
  );
};

const NextArrow: React.FunctionComponent<IArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <Button secondary action={onClick}>
      <Svg name="arrow-right" />
    </Button>
  );
};

const Carousel: React.FunctionComponent<ICarouselProps> = (props) => {
  const { children } = props;

  const { isMobile } = useIsMobileViewport();
  const [slidesToShow, setSlidesToShow] = useState(2);

  const settings = {
    className: "slider variable-width",
    dots: true,
    draggable: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  //   useEffect(() => {
  //     function handleResize() {
  //       if (isMobile) {
  //         setSlidesToShow(1);
  //       } else {
  //         setSlidesToShow(2);
  //       }
  //     }
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, [isMobile]);

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
