import React from "react";

import * as SC from "./styles";

const ConvertStoryPoints: React.FC = () => {
  return (
    <SC.Container>
      <iframe src="https://story-points-converter.vercel.app/" />
    </SC.Container>
  );
};

export { ConvertStoryPoints };
