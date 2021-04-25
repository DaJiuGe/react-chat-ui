import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Intro, Name } from "./style";
import Avatar from "components/Avatar";
import face1 from "assets/images/face-male-1.jpg";

function ContactCard({ children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face1} status="online" />
      <Name>李荣浩</Name>
      <Intro>这是一段个性签名,这个人很懒</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
