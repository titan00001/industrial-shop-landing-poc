import * as React from "react";
import Button from "../../Component/Button";
import Link from "../../Component/Link";

interface IButtonTestProps {}

const ButtonTest: React.FunctionComponent<IButtonTestProps> = () => {
  return (
    <>
      <div>
        <div className="btns">
          <Button>"Button"</Button>

          <Button primary>Button Primary"</Button>

          <Button secondary>Button Secondary"</Button>

          <Button size="full-width">Full width"</Button>
        </div>

        <Button size="sm">Button Small"</Button>

        <Button size="md">Button Medium"</Button>

        <Button size="lg">Large</Button>
      </div>

      <div>
        <div className="btns">
          <Link>Lorem, ipsum dolor.</Link>

          <Link variant="primary">Lorem, ipsum dolor.</Link>

          <Link variant="secondary">Lorem, ipsum dolor.</Link>

          <Link size="full-width">Lorem, ipsum dolor.</Link>
        </div>

        <Link size="sm">Lorem, ipsum dolor.</Link>

        <Link size="md">Lorem, ipsum dolor.</Link>

        <Link size="lg">Lorem, ipsum dolor.</Link>
      </div>
    </>
  );
};

export default ButtonTest;
