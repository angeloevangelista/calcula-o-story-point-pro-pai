import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;

  > *:nth-child(2) {
    position: relative;

    flex: 1;

    display: flex;
    flex-direction: column;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 1.2rem;
    height: 6rem;

    background: linear-gradient(to top, #100E10, transparent);
  }
`;

export const SideBar = styled.ul`
  z-index: 1;

  display: flex;
  list-style: none;

  padding: 0.4rem;

  > div {
    flex: 1;
    background-color: #161416;

    padding: 0.4rem;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;
  }
`;

export const SideBarItem = styled.li`
  position: relative;

  background: #120e12;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;

  border-radius: 4px;

  a {
    width: 100%;
    height: 100%;

    color: inherit;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border-radius: inherit;

    svg {
      width: 50%;
      height: 50%;
    }
  }

  .label {
    position: absolute;

    white-space: nowrap;
    pointer-events: none;

    left: 0;
    opacity: 0%;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    .label {
      opacity: 100%;
      transform: translateX(calc(3.2rem + 0.4rem));

      background: inherit;

      padding: 0.4rem;
      border-radius: 4px;
    }
  }
`;
