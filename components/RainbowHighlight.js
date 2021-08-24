import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="underline"
      multiline={true}
      padding={[0, 0, 10, 0]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
      strokeWidth={1}
    >
      {children}
    </RoughNotation>
  );
};
