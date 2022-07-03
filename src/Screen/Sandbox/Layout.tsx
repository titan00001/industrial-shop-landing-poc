import * as React from "react";
import Layout from "../../Layout";

interface ILayoutTestProps {}

const LayoutTest: React.FunctionComponent<ILayoutTestProps> = (props) => {
  return (
    <>
      <Layout variant="equal-width-box">
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
        <div style={{ height: "300px", width: "300px" }}></div>
      </Layout>
      <Layout variant="varying-width-boxes">
        <div className="col col--1"></div>
        <div className="col col--2"></div>
        <div className="col col--4"></div>
        <div className="col col--6"></div>
        <div className="col col--1"></div>
        <div className="col col--1"></div>
        <div className="col col--1"></div>
        <div className="col col--1"></div>
      </Layout>
      <Layout variant="varying-height-width-box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Layout>
      <Layout variant="overlapping-box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Layout>
    </>
  );
};

export default LayoutTest;
