import styled from "styled-components";

type ContainerProps = {
  $variant: "normal" | "large";
};

export const Container = styled.div<ContainerProps>`
  .content {
    font-size: ${({ $variant }) => {
      switch ($variant) {
        case "normal":
          return 1.2;
        case "large":
          return 2;
      }
    }}rem;
  }

  .icon {
    font-size: ${({ $variant }) => {
      switch ($variant) {
        case "normal":
          return 0.8;
        case "large":
          return 1.2;
      }
    }}rem;
  }
`;
