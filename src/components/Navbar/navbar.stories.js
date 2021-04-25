import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar, { MenuItem } from ".";
import "styled-components/macro";

export default {
  title: "页面组件/Nvabar",
  component: Navbar,
};

export const Default = () => <Navbar />;

export const Menu = () => (
  <div
    css={`
      background-color: ${({ theme }) => theme.darkPurple};
      width: 100px;
    `}
  >
    <MenuItem active showBadge icon={faCommentDots}></MenuItem>
  </div>
);
