import * as React from "react";
import Button from "../../Component/Button";
import Link from "../../Component/Link";

interface IButtonTestProps {}

const ButtonTest: React.FunctionComponent<IButtonTestProps> = () => {
  return (
    <>
      <div>
        <div className="btns">
          <Button text="Button" />

          <Button primary text="Button Primary" />

          <Button secondary text="Button Secondary" />

          <Button size="full-width" text="Full width" />
        </div>

        <Button size="sm" text="Button Small" />

        <Button size="md" text="Button Medium" />

        <Button size="lg" text="Large" />
      </div>

      <div>
        <div className="btns">
          <Link text="Link" />

          <Link variant="primary" text="Link Primary" />

          <Link variant="secondary" text="Link Secondary" />

          <Link size="full-width" text="Full width" />
        </div>

        <Link size="sm" text="Link Small" />

        <Link size="md" text="Link Medium" />

        <Link size="lg" text="Large" />
      </div>
    </>
  );
};

export default ButtonTest;
