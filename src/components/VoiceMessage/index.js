import React from "react";
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import Icon from "components/Icon";
import Button from "components/Button";
import Text from "components/Text";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { ReactComponent as Wave } from "assets/icons/wave.svg";
import theme from "theme";

function VoiceMessage({ children, time, type, ...rest }) {
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          icon={Play}
          color="white"
          width="14"
          height="16"
          style={{ transform: "translateX(1px)" }}
        />
      </Button>
      <Icon icon={Wave} color={theme.primaryColor} width="100%" height="100%" />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default VoiceMessage;
