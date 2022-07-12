import Link from "Component/Link";
import SectionWrapper from "Component/SectionWrapper";
import Typo from "Component/Typo";
import * as React from "react";
import "./footer.style.scss";

interface IFooterProps {}
interface IFooterNavProps {}

const FooterNav1: React.FunctionComponent<IFooterNavProps> = (props) => {
  return (
    <div className="footer-nav">
      <Typo classes="heading" h4>
        Raja Ram Arya & Sons
      </Typo>
      <Typo classes="heading">83B, Madan Mohan Burman St,</Typo>
      <Typo classes="heading">Near College Street Market</Typo>
      <Typo classes="heading">Kolkata - 700007</Typo>
      <Typo classes="heading">West Bengal, India</Typo>
    </div>
  );
};
const FooterNav2: React.FunctionComponent<IFooterNavProps> = (props) => {
  return (
    <div className="footer-nav">
      <Typo classes="heading u" h4>
        Information
      </Typo>
      <Typo classes="heading">Contact: 93392238368</Typo>
      <Typo classes="heading">Email: ayusharya021@gmail.com</Typo>
      <Typo classes="heading">GSTIN: 19AGAPA7804L1ZF</Typo>
    </div>
  );
};

const CopyRightNav: React.FunctionComponent<IFooterNavProps> = (props) => {
  return (
    <div className="footer-nav">
      <Typo classes="heading" h5>
        Copyright 2022. All right reserved.
      </Typo>
    </div>
  );
};

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <SectionWrapper
      hasContainer
      backgroundColor="var(--gray-10)"
      childClasses="footer-container"
    >
      <FooterNav1 />
      <FooterNav2 />
      <CopyRightNav />
    </SectionWrapper>
  );
};

export default Footer;
