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
      <SectionWrapper backgroundColor="var(--gray-6)" childClasses="header">
        <Image
          image="data:image/png;base64,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"
          aspectRatio={16 / 9}
          width={50}
        />
        <Button
          // classes="bg-dark"
          action={() => {
            setisVisible((visible) => !visible);
          }}
          size="sm"
          secondary
        >
          <Svg name="menu" height="24" width="24" />
        </Button>
      </SectionWrapper>
      {isVisible && (
        <nav className="header-nav-mobile">
          <Link>About Us</Link>
          <Link>Speciality</Link>
          <Link>Testimony</Link>
          <Link>Contact Us</Link>
        </nav>
      )}
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
      <SectionWrapper backgroundColor="var(--gray-6)" childClasses="header">
        <Image
          image="data:image/png;base64,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"
          // aspectRatio={16 / 9}
          width={150}
          height={40}
        />

        <nav className="header-nav">
          <Link>About Us</Link>
          <Link>Speciality</Link>
          <Link>Testimony"</Link>
          <Link>Contact Us</Link>
        </nav>
      </SectionWrapper>
    </>
  );
};

export default Header;
