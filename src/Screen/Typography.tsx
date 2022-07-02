import React from "react";
import Typo from "../Component/Typo";

export interface ITypographyProps {}

const Typography: React.FunctionComponent<ITypographyProps> = (props) => {
  return (
    <>
      <Typo>
        Head over to _typography.styles.scss to check the variants of typography
      </Typo>
      <Typo h1>
        Heading 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo h2>
        Heading 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo h3>
        Heading 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo h4>
        Heading 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo h5>
        Heading 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo h6>
        Heading 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo>
        Heading 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        praesentium!
      </Typo>
      <Typo>
        Heading 6 Lorem{" "}
        <Typo bold inline>
          ipsum dolor sit amet
        </Typo>{" "}
        consectetur adipisicing elit. At, praesentium!
      </Typo>

      <div style={{ maxWidth: "400px", maxHeight: "100px" }}>
        <Typo handleTextOverflow>
          Text content exceeding parent Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut, voluptatibus.
        </Typo>
      </div>
    </>
  );
};

export default Typography;
