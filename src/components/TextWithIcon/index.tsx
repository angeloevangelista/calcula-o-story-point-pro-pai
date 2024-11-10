import React from "react";

import * as SC from "./styles";

type TextWithIconProps = {
  text?: string;
  icon?: React.ReactNode;
  variant?: "normal" | "large";
  children?: React.ReactNode;
};

const TextWithIcon: React.FC<TextWithIconProps> = ({
  text,
  icon: Icon,
  variant = "normal",
  children,
}) => {
  return (
    <SC.Container $variant={variant}>
      {Icon && <div className="icon">{Icon}</div>}

      <div className="content">
        {text}
        {children}
      </div>
    </SC.Container>
  );
};

export { TextWithIcon };
