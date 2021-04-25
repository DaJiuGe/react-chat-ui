import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledVideoCall, {
  Minimize,
  Self,
  Actions,
  Action,
  VideoCallAlert,
} from "./style";
import videoCall from "assets/images/video-caller.jpg";
import face from "assets/images/face-male-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import "styled-components/macro";

function VideoCall({ children, onSlashVideoCallClick, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);

  if (!fullScreen) {
    return (
      <VideoCallAlert
        onClick={() => {
          setFullScreen(true);
        }}
      >
        <Avatar
          src={face}
          css={`
            grid-area: avatar;
          `}
        ></Avatar>
        <Paragraph
          size="medium"
          css={`
            grid-area: info;
          `}
        >
          正在跟 李荣浩 进行视频通话
        </Paragraph>
        <Paragraph
          type="secondary"
          css={`
            grid-area: action;
          `}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            justify-self: end;
            font-size: 20px;
            opacity: 0.3;
          `}
        />
      </VideoCallAlert>
    );
  }
  return (
    <StyledVideoCall src={videoCall} {...rest}>
      <Self src={face} size="140px" />
      <Minimize
        shape="rect"
        onClick={() => {
          setFullScreen(false);
        }}
      >
        <FontAwesomeIcon icon={faCompressAlt} />
      </Minimize>
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone} />
        </Action>
        <Action type="hangoff">
          <FontAwesomeIcon
            icon={faPhoneSlash}
            onClick={onSlashVideoCallClick}
          />
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute} />
        </Action>
      </Actions>
    </StyledVideoCall>
  );
}

VideoCall.propTypes = {
  children: PropTypes.any,
};

export default VideoCall;
