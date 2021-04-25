import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Text from "components/Text";
import Paragraph from "components/Paragraph";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";
import Icon from "components/Icon";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";

function TitleBar({
  children,
  onAvatarClick,
  onVideoCallClick,
  animeProps,
  style,
  ...rest
}) {
  return (
    <StyledTitleBar style={{ ...style, ...animeProps }} {...rest}>
      <Avatar status="offline" src={face} onClick={onAvatarClick}></Avatar>
      <Title>
        <Text size="large" bold>
          慕容天宇
        </Text>
        <Paragraph>
          <Text>离线</Text>
          <Text>· 最后阅读: 3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} icon={Camera} onClick={onVideoCallClick} />
        <Icon opacity={0.3} icon={Options} />
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
