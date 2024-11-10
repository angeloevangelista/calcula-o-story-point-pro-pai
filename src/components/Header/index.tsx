import React from "react";
import { GiGluttonousSmile } from "react-icons/gi";

import { TextWithIcon } from "../TextWithIcon";
import { useGlobalContext } from "../../contexts/global";

import * as SC from "./styles";

const Header: React.FC = () => {
  const { user } = useGlobalContext();

  return (
    <SC.Container>
      <TextWithIcon icon={<GiGluttonousSmile />}>
        <span>Let's go, </span>
        <strong>
          <u>{user.name}</u>
        </strong>
        <span>!</span>
      </TextWithIcon>
    </SC.Container>
  );
};

export { Header };
