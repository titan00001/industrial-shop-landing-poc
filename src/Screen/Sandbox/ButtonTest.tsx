import * as React from "react";
import Button from "../../Component/Button";

interface IButtonTestProps {}

const ButtonTest: React.FunctionComponent<IButtonTestProps> = () => {
  return (
    <>
      <div className="btns">
        <Button text="Button" />

        <Button primary text="Button Primary" />

        <Button secondary text="Button Secondary" />

        <Button size="full-width" text="Full width" />
      </div>

      <Button size="sm" text="Button Small" />

      <Button size="md" text="Button Medium" />

      <Button size="lg" text="Large" />
    </>
  );
};

export default ButtonTest;
