import Button from "Component/Button";
import Link from "Component/Link";
import MapContainer from "Component/MapContainer";
import SectionWrapper from "Component/SectionWrapper";
import Typo from "Component/Typo";
import Footer from "Feature/Footer";
import Header from "Feature/Header";
import ImageCard from "Feature/ImageCard";
import SideBySide from "Feature/SideBySide";
import SideBySideOverlap from "Feature/SideBySideOverlap";
import Layout from "Layout";
import * as React from "react";
import constants from "../../constants/constant.json";

const imagePlaceholder = constants.imagePlaceholder;

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Header />
      <SideBySide imageSrc={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Typo>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, quod?
        </Typo>
      </SideBySide>
      <SideBySide imageOnRight imageSrc={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Button primary size="md">
          "CLick Here"
        </Button>
      </SideBySide>
      {/* <SectionWrapper>
        <MapContainer height="500px" width="300px" />
      </SectionWrapper> */}
      /
      {/* <SideBySideOverlap overlapIn12Column={1} imageSrc={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap> */}
      {/* <SideBySideOverlap
        overlapIn12Column={1}
        imageOnRight
        imageSrc={imagePlaceholder}
      >
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap> */}
      {/* <ImageCard imgScr={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Typo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas
          suscipit possimus?
        </Typo>
      </ImageCard> */}
      <SectionWrapper>
        <Layout variant="equal-width-box">
          <ImageCard imgScr={imagePlaceholder}>
            <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
            <Typo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas suscipit possimus?
            </Typo>
          </ImageCard>
          <ImageCard imgScr={imagePlaceholder}>
            <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
          </ImageCard>
          <ImageCard imgScr={imagePlaceholder}>
            <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
            <Typo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas suscipit possimus?
            </Typo>
          </ImageCard>
          <ImageCard imgScr={imagePlaceholder}>
            <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
            <Typo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quas suscipit possimus?
            </Typo>
          </ImageCard>
        </Layout>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default Home;
