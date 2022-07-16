import Button from "Component/Button";
import Image from "Component/Image";
import Link from "Component/Link";
import SectionWrapper from "Component/SectionWrapper";
import Svg from "Component/Svg";
import useIsMobileViewport from "hooks/useIsMobileViewport";
import * as React from "react";
import "./header.style.scss";

interface IHeaderProps {}

const MobileHeader: React.FunctionComponent = () => {
  const [isVisible, setisVisible] = React.useState<boolean>(false);

  return (
    <>
      <SectionWrapper
        hasContainer={true}
        backgroundColor="var(--gray-10)"
        childClasses="header-mobile"
      >
        <div className="initial">
          <Image image="logo.png" width={40} height={40} />
          <Button
            action={() => {
              setisVisible((visible) => !visible);
            }}
            size="sm"
            secondary
          >
            <Svg name="menu" height="24" width="24" />
          </Button>
        </div>

        {isVisible && (
          <nav className="header-nav-mobile">
            <Link internalUrl="#about-us">About Us</Link>
            <Link internalUrl="#speciality">Speciality</Link>
            <Link internalUrl="#product">Products</Link>
            <Link internalUrl="#contact-us">Contact Us</Link>
          </nav>
        )}
      </SectionWrapper>
    </>
  );
};

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const { isMobile } = useIsMobileViewport();
  if (isMobile) {
    return <MobileHeader />;
  }
  return (
    <>
      <SectionWrapper
        hasContainer={true}
        backgroundColor="transparent"
        classes="header-container"
        childClasses="header"
      >
        <Image image="logo.png" width={80} height={80} />

        <nav className="header-nav">
          <Link variant="secondary" internalUrl="#about-us">
            About Us
          </Link>
          <Link variant="secondary" internalUrl="#speciality">
            Speciality
          </Link>
          <Link variant="secondary" internalUrl="#product">
            Products
          </Link>
          <Link variant="secondary" internalUrl="#contact-us">
            Contact Us
          </Link>
        </nav>
      </SectionWrapper>
    </>
  );
};

export default Header;
