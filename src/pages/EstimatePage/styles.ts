import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem 2.4rem;

  overflow-y: auto;

  flex: 1;
`;

export const EstimateForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 1.8rem;
  }
`;

export const ComplexityLevelInput = styled.div``;

export const ComplexityLevelInputSliderContainer = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.4rem;

  > .indicators {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #4d4d4d;
  }
`;

export const HoursInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.4rem;

  input {
    max-width: 3.2rem;
    color: #fff;
    font-size: 1.6rem;
    text-align: center;

    border: 0;
    padding: 0.4rem;
    outline: none;
    background-color: inherit;
    border-bottom: solid 1px #ddd;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button,
    &[type="number"] {
      -moz-appearance: textfield;
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

type AddDayButtonProps = {
  $color: string;
};

export const AddDayButton = styled.button<AddDayButtonProps>`
  color: #fff;
  background: ${({ $color }) => $color};

  font-size: 0.8rem;

  margin: 0 1.4rem;

  border: none;
  padding: 0.4rem;
  border-radius: 4px;

  text-transform: uppercase;
  font-weight: 800;
`;

export const Button = styled.button`
  color: #fff;
  background: #ed7e16;

  border: none;
  padding: 0.8rem;
  border-radius: 4px;

  text-transform: uppercase;
  font-weight: 800;
`;

export const StepTimeDistributor = styled.div`
  width: 32rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type StepCardProps = {
  $color?: string;
};

export const StepCard = styled.div<StepCardProps>`
  width: min-content;
  color: #fff;
  background-color: ${({ $color = "#ed7e16" }) => $color};

  padding: 0.4rem 1.4rem;
  border-radius: 48px;

  text-transform: uppercase;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;
`;
