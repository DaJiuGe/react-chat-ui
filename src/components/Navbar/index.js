import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import StyledNavbar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import profileImage from "assets/images/face-male-1.jpg";
import {
  faStickyNote,
  faFolder,
  faUsers,
  faCog,
  faEllipsisH,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

// 如果不加这个 css属性不生效
import "styled-components/macro";

function Navbar({ ...rest }) {
  return (
    <StyledNavbar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavbar>
  );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, { path: to, exact: to === "/" });
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

Navbar.propTypes = {};

export default Navbar;
export { MenuItem };
