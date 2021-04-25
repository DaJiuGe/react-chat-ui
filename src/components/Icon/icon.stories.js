import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => <Icon icon={SmileIcon} color={"red"} />;

export const CustomSize = () => (
  <Icon icon={SmileIcon} width={48} height={48} />
);

export const FontAwesome = () => <FontAwesomeIcon icon={faCommentDots} />;

export const FontAwesomeColor = () => (
  <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />
);

export const FontAwesomeSize = () => (
  <div className="row-elements">
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "36px" }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
  </div>
);
