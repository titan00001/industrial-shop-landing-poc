import Button from "Component/Button";
import Link from "Component/Link";
import Typo from "Component/Typo";
import Header from "Feature/Header";
import SideBySide from "Feature/SideBySide";
import SideBySideOverlap from "Feature/SideBySideOverlap";
import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Header />

      <SideBySide imageSrc="https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg">
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Typo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, quod?
        </Typo>
      </SideBySide>

      <SideBySide
        imageOnRight
        imageSrc="https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"
      >
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Button primary size="lg" text="CLick Here" />
      </SideBySide>

      <SideBySideOverlap
        overlapIn12Column={1}
        imageSrc="https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"
      >
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap>

      <SideBySideOverlap
        overlapIn12Column={1}
        imageOnRight
        imageSrc="https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg"
      >
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap>
    </>
  );
};

export default Home;
