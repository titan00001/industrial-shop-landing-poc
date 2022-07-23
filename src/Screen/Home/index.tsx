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
      <div id="about-us" className="margin-bottom--lg">
        <SectionWrapper
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZbOkE7XZPfZc1Fx4IqtDBLRt2asmfKk9Tw&usqp=CAU"
          classes="hero-section-1"
          childClasses="default-padding hero-section-1-child container"
          hasImageBlur
        >
          <Typo h2>Who Are We</Typo>
          <Typo>
            With an aim to provide a one-stop solution for wide variety of
            cutting tools and industrial equipments, Late Shri Raja Ram Arya
            started this company in 1967. We have an offline presence in
            Kolkata, where we are taking care of our customer's need by
            providing durable item which lasts long.
          </Typo>
        </SectionWrapper>
      </div>
      <div id="speciality" className="margin-bottom--lg">
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
            <Typo h2>Wide range of cutting tools</Typo>
            <Link internalUrl="#product" variant="primary" size="sm">
              View Product
            </Link>
          </SideBySide>

          <SideBySide nofallback>
            <Typo h2>Quantity Big or Small. Give us a call</Typo>
            <Link internalUrl="#contact-us" variant="secondary" size="sm">
              Contact us
            </Link>
          </SideBySide>
        </SectionWrapper>
      </div>
      <div id="product" className="margin-bottom--lg">
        <SectionWrapper hasContainer>
          <Typo h2>Products</Typo>
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
              <Typo h4>Tap drill</Typo>
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
              <Typo h4>Drill Bits</Typo>
              <Typo>Used for creating holes</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st3.depositphotos.com/24899686/36513/i/600/depositphotos_365130360-stock-photo-a-set-of-metal-marks.jpg"
              }
            >
              <Typo h4>Tap drill bits</Typo>
              <Typo>Creating threads</Typo>
              <Typo>New and old both available</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://static6.depositphotos.com/1000291/542/i/600/depositphotos_5428279-stock-photo-finished-metal-reamer-tools.jpg"
              }
            >
              <Typo h4>Reamer Drill</Typo>
              <Typo>Polishing holes for precise measurement</Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>

            <ImageCard
              imgScr={
                "https://st2.depositphotos.com/1036724/8873/i/450/depositphotos_88736028-stock-photo-circular-cutter-blade.jpg"
              }
            >
              <Typo h4>Cutter Blade</Typo>
              <Typo>Cutting</Typo>
              <Typo inline bold>
                Carbide available
              </Typo>
              <Typo>New and old both available on order</Typo>
            </ImageCard>
          </Carousel>
        </SectionWrapper>
      </div>
      <div id="contact-us">
        <SectionWrapper classes="margin-top--md" hasContainer>
          <Typo h2>Contact Us</Typo>

          <SectionWrapper classes="margin-top--md">
            <Layout variant="equal-width-box">
              <ImageCard aspectRatio={1} imgScr={constants.ProfileAvatar}>
                <Typo h3>Ashok Kumar Arya</Typo>
                <Typo>+91 93392238368</Typo>
                <Typo>Manager</Typo>
                <div className="flex-row">
                  <Link target="_blank" externalUrl="tel:+9193392238368">
                    <Typo h5>Call</Typo>
                  </Link>
                  <Link
                    target="_blank"
                    externalUrl="https://wa.me/919339223868/?text=hello"
                  >
                    <Typo h5>Whatsapp</Typo>
                  </Link>
                </div>
              </ImageCard>
              <ImageCard aspectRatio={1} imgScr={constants.ProfileAvatar}>
                <Typo h3>Ayush Arya</Typo>
                <Typo>+91 9123719175</Typo>
                <div>
                  <Link target="_blank" externalUrl="tel:+919123719175">
                    <Typo h5>Call</Typo>
                  </Link>
                  <Link
                    target="_blank"
                    externalUrl="https://wa.me/919123719175/?text=hello"
                  >
                    <Typo h5>Whatsapp</Typo>
                  </Link>
                </div>
              </ImageCard>
            </Layout>
          </SectionWrapper>
          <SectionWrapper classes="margin-top--md margin-bottom--md">
            <MapContainer height="400px" width="100%" />
          </SectionWrapper>
        </SectionWrapper>
      </div>

      <Footer />
    </>
  );
};

export default Home;
