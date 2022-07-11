import Link from "Component/Link";
import SectionWrapper from "Component/SectionWrapper";
import Typo from "Component/Typo";
import * as React from "react";
import "./footer.style.scss";

interface IFooterProps {}
interface IFooterNavProps {}

const FooterNav: React.FunctionComponent<IFooterNavProps> = (props) => {
  return (
    <div className="footer-nav">
      <Typo classes="heading" h4>
        Nav 1
      </Typo>
      <Link size="md" variant="secondary">
        link1
      </Link>
      <Link size="md" variant="secondary">
        link2
      </Link>
      <Link size="md" variant="secondary">
        link3
      </Link>
    </div>
  );
};

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <SectionWrapper
      hasContainer
      backgroundColor="var(--gray-6)"
      childClasses="footer"
    >
      <FooterNav />
      <FooterNav />
      <FooterNav />
    </SectionWrapper>
  );
};

export default Footer;
