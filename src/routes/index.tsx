import { TbTimeDuration15 } from "react-icons/tb";
import { IoEnterOutline } from "react-icons/io5";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "../components/Header";
import { NoWherePage } from "../pages/NoWherePage";
import { EstimatePage } from "../pages/EstimatePage";

import * as SC from "./styles";
import { ConvertStoryPoints } from "../pages/ConvertStoryPoints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EstimatePage />,
  },
  {
    path: "/convert-story-points",
    element: <ConvertStoryPoints />,
  },
  {
    path: "/:session_code/estimate",
    element: <EstimatePage />,
  },
  {
    path: "/:session_code/summary",
    element: <EstimatePage />,
  },
  {
    path: "*",
    element: <NoWherePage />,
  },
]);

const Routes: React.FC = () => {
  return (
    <SC.Container>
      <SC.SideBar>
        <div>
          <SC.SideBarItem>
            <a href="/">
              <IoEnterOutline />
            </a>
            <strong className="label">Join another room</strong>
          </SC.SideBarItem>

          <SC.SideBarItem>
            <a href="/convert-story-points">
              <TbTimeDuration15 />
            </a>
            <strong className="label">Convert Story Points</strong>
          </SC.SideBarItem>

          {/* <SC.SideBarItem>
            <a href="/fake-session-code/estimate">
              <TbEdit />
            </a>
            <strong className="label">Fulfill estimate</strong>
          </SC.SideBarItem>

          <SC.SideBarItem>
            <a href="/fake-session-code/summary">
              <TbUsersGroup />
            </a>
            <strong className="label">Estimate summary</strong>
          </SC.SideBarItem> */}
        </div>
      </SC.SideBar>

      <div>
        <Header />

        <RouterProvider router={router} />

        <footer className="footer"></footer>
      </div>
    </SC.Container>
  );
};

export { Routes };
