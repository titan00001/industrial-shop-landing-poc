import Button from "Component/Button";
import Carousel from "Component/Carousel";
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
import "./home.style.scss";

const imagePlaceholder = constants.imagePlaceholder;

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Header />
      <div id="about-us">
        <SectionWrapper
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZbOkE7XZPfZc1Fx4IqtDBLRt2asmfKk9Tw&usqp=CAU"
          classes="hero-section-1"
          childClasses="default-padding hero-section-1-child container"
          hasImageBlur
        >
          <Typo h2>Who Are We</Typo>
          <Typo>
            With an aim to provide a one-stop solution for wide variety of
            cutting tools, Late Shri Raja Ram Arya started this company in 1967.
            We have offline presence in Kolkata (address), where we are taking
            care of our customer's need by providing durable item which lasts
            long.
          </Typo>
        </SectionWrapper>
      </div>
      <div id="speciality">
        <SectionWrapper hasContainer>
          <SideBySide
            imageSrc={
              "https://st2.depositphotos.com/1993297/8117/i/600/depositphotos_81177464-stock-photo-carbide-endmills.jpg"
            }
          >
            <Typo h2>Durable Products</Typo>
          </SideBySide>

          <SideBySide
            imageOnRight
            imageSrc="https://st3.depositphotos.com/1000949/18739/i/600/depositphotos_187397774-stock-photo-professional-cutting-tools-used-for.jpg"
          >
            <Typo h2>Drills, Cutters, Reamers... you name it, we have it</Typo>
            <Link internalUrl="#product" variant="primary" size="sm">
              View Product
            </Link>
          </SideBySide>

          <SideBySide imageSrc={constants.whiteBackground}>
            <Typo h2>Quantity Big or Small. Give us a call</Typo>
            <Link internalUrl="#contact-us" variant="secondary" size="sm">
              Contact us
            </Link>
          </SideBySide>
        </SectionWrapper>
      </div>
      <div id="product">
        <SectionWrapper hasContainer>
          <Layout variant="equal-width-box">
            <ImageCard
              imgScr={
                "https://st2.depositphotos.com/3013707/6469/i/600/depositphotos_64692045-stock-photo-metal-drill-bits-drilling-and.jpg"
              }
              width={300}
            >
              <Typo h4>Drill Bits</Typo>
              <Typo>Used for creating holes</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st3.depositphotos.com/24899686/36513/i/600/depositphotos_365130360-stock-photo-a-set-of-metal-marks.jpg"
              }
              width={300}
            >
              <Typo h4>Tap drill bits</Typo>
              <Typo>Creating threads</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://static6.depositphotos.com/1000291/542/i/600/depositphotos_5428279-stock-photo-finished-metal-reamer-tools.jpg"
              }
              width={300}
            >
              <Typo h4>Reamer Drill</Typo>
              <Typo>Polishing holes for precise measurement</Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st2.depositphotos.com/1036724/8873/i/450/depositphotos_88736028-stock-photo-circular-cutter-blade.jpg"
              }
              width={300}
            >
              <Typo h4>Cutter Blade</Typo>
              <Typo>Cutting</Typo>
              <Typo inline bold>
                Carbide available
              </Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>
          </Layout>
        </SectionWrapper>
        <SectionWrapper hasContainer>
          <Carousel>
            <SideBySide
              imageSrc={
                "https://media.istockphoto.com/photos/drill-picture-id157686611?b=1&k=20&m=157686611&s=170667a&w=0&h=nZ5QWOMtusKz0Ci3zmtdrmQmZytTE_ev9eyjyWiiWJo="
              }
            >
              <Typo h2>Checkout our catalog</Typo>
              <Typo>Diverse range of products</Typo>
              <Link classes="margin-top--sm" variant="primary">
                Products
              </Link>
            </SideBySide>
            <ImageCard
              imgScr={
                "https://st2.depositphotos.com/3013707/6469/i/600/depositphotos_64692045-stock-photo-metal-drill-bits-drilling-and.jpg"
              }
            >
              <Typo h2>Drill Bits</Typo>
              <Typo>Used for creating holes</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st3.depositphotos.com/24899686/36513/i/600/depositphotos_365130360-stock-photo-a-set-of-metal-marks.jpg"
              }
            >
              <Typo h2>Tap drill bits</Typo>
              <Typo>Creating threads</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://static6.depositphotos.com/1000291/542/i/600/depositphotos_5428279-stock-photo-finished-metal-reamer-tools.jpg"
              }
            >
              <Typo h2>Reamer Drill</Typo>
              <Typo>Polishing holes for precise measurement</Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st2.depositphotos.com/1036724/8873/i/450/depositphotos_88736028-stock-photo-circular-cutter-blade.jpg"
              }
            >
              <Typo h2>Cutter Blade</Typo>
              <Typo>Cutting</Typo>
              <Typo inline bold>
                Carbide available
              </Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>
          </Carousel>
        </SectionWrapper>
      </div>
      {/* <SectionWrapper
        hasContainer
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZbOkE7XZPfZc1Fx4IqtDBLRt2asmfKk9Tw&usqp=CAU"
        backgroundColor="var(--gray-2)"
      >
        <SideBySide imageSrc={imagePlaceholder}>
          <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
          <Typo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, quod?
          </Typo>
        </SideBySide>
      </SectionWrapper> */}
      <div id="contact-us">
        <SectionWrapper classes="margin-top--md" hasContainer>
          <Typo h2>Contact Us</Typo>

          <SectionWrapper classes="margin-top--md">
            <Layout variant="equal-width-box">
              <ImageCard aspectRatio={1} imgScr={constants.ProfileAvatar}>
                <Typo h3>Ashok Kumar Arya</Typo>
                <Typo>+91 93392238368</Typo>
                <Link
                  target="_blank"
                  externalUrl="https://wa.me/919339223868/?text=hello"
                >
                  <Typo h5>Say hello to Ashok on Whatsapp</Typo>
                </Link>
              </ImageCard>
              <ImageCard aspectRatio={1} imgScr={constants.ProfileAvatar}>
                <Typo h3>Ayush Arya</Typo>
                <Typo>+91 9123719175</Typo>
                <Link
                  target="_blank"
                  externalUrl="https://wa.me/919123719175/?text=hello"
                >
                  <Typo h5>Say hello to Ayush on Whatsapp</Typo>
                </Link>
              </ImageCard>
            </Layout>
          </SectionWrapper>
          <SectionWrapper classes="margin-top--md">
            <MapContainer height="600px" width="100%" />
          </SectionWrapper>
        </SectionWrapper>
      </div>

      <Footer />
      {/* <SideBySideOverlap overlapIn12Column={1} imageSrc={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap> */}
      {/* <SideBySideOverlap
        overlapIn12Column={1}
        imageOnRight
        imageSrc={imagePlaceholder}
      >
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
      </SideBySideOverlap>
      {/* <ImageCard imgScr={imagePlaceholder}>
        <Typo h2>Lorem ipsum dolor sit amet consectetur.</Typo>
        <Typo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas
          suscipit possimus?
        </Typo>
      </ImageCard> */}
    </>
  );
};

export default Home;
