import React from "react";
import Button from "../pages/Buttons/Button";
import Home from "../pages/Home/Home";
import Tooltip from "../pages/Tooltip/Tooltip";
export const routes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "button",
    component: <Button />,
  },
  {
    id: 3,
    path: "tooltip",
    component: <Tooltip />,
  },
];
