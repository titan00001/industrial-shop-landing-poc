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
      <Link text="link1" size="md" variant="secondary" />
      <Link text="link2" size="md" variant="secondary" />
      <Link text="link3" size="md" variant="secondary" />
    </div>
  );
};

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <SectionWrapper childClasses="footer">
      <FooterNav />
      <FooterNav />
      <FooterNav />
    </SectionWrapper>
  );
};

export default Footer;
